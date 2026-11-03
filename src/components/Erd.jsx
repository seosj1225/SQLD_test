// ERD를 SVG로 그립니다.
// ents: [{ name, c(열), r(행), pk: [...], at: [...] }]
// rels: [{ p 부모, ch 자식, id 식별관계 여부,
//          co 자식쪽 선택(○), cm 자식쪽 필수(|), fb 까마귀발 바로 옆 세로줄,
//          nb 부모쪽 세로줄 생략, mix 절반 실선/절반 점선, solid 항상 실선, plain 라벨 없음 }]
// noSym/note: 기본 기호 범례 대신 note 문구를 표시
//
// [확장 형식] 양 끝 기호를 직접 지정 (제58회부터 사용, 기존 형식과 함께 쓸 수 있음)
// rels: [{ a, b,                      관계 양 끝 엔터티 이름
//          aEnd, bEnd,                각 끝 기호: "none" | "one"(|) | "zeroOne"(○|) | "many"(까마귀발)
//                                     | "oneMany"(까마귀발+|) | "zeroMany"(까마귀발+○)
//          line,                      "solid"(기본) | "dashed" | "mix"(a 쪽 절반 점선, b 쪽 절반 실선)
//          route,                     "straight"(기본) | "elbow"(ㄱ자: 위쪽 엔터티 아래변 → 아래쪽 엔터티 옆변)
//                                     | "self"(자기 참조: a 끝 = 오른쪽 변 FK 행, b 끝 = 아래변, a와 b는 같은 엔터티)
//          ux,                        elbow 시작점 / self 아래쪽 끝의 가로 위치(엔터티 폭 대비 0~1, 기본 0.5 / 0.6)
//          label }]                   선 위 글자 (예: "식별"). 없으면 표시 안 함

const PAD = 10, LH = 19, HEAD = 26, GX = 96, GY = 64, M = 14, FS = 13;
const SELF_X = 44, SELF_Y = 36; // 자기 참조 고리가 엔터티 밖으로 나가는 폭/높이

function textWidth(t, size) {
  let w = 0;
  for (const ch of t) w += /[ㄱ-힝]/.test(ch) ? size : size * 0.6;
  return w;
}

function layout(d) {
  const boxes = {};
  d.ents.forEach((e) => {
    const lines = [...e.pk, ...e.at];
    const w = Math.max(116, Math.max(textWidth(e.name, 13), ...lines.map((l) => textWidth(l, FS))) + PAD * 2 + 26);
    const pkH = e.pk.length * LH + 10;
    const atH = e.at.length ? e.at.length * LH + 10 : 16;
    boxes[e.name] = { e, w, h: HEAD + pkH + atH, pkH };
  });
  const nc = Math.max(...d.ents.map((e) => e.c)) + 1;
  const nr = Math.max(...d.ents.map((e) => e.r)) + 1;
  const colW = Array(nc).fill(0);
  const rowH = Array(nr).fill(0);
  Object.values(boxes).forEach((b) => {
    colW[b.e.c] = Math.max(colW[b.e.c], b.w);
    rowH[b.e.r] = Math.max(rowH[b.e.r], b.h);
  });
  const colX = (c) => M + colW.slice(0, c).reduce((a, b) => a + b, 0) + c * GX;
  const rowY = (r) => M + rowH.slice(0, r).reduce((a, b) => a + b, 0) + r * GY;
  Object.values(boxes).forEach((b) => {
    b.x = colX(b.e.c) + (colW[b.e.c] - b.w) / 2;
    b.y = rowY(b.e.r);
  });
  const self = d.rels.some((r) => r.route === "self");
  return { boxes, W: colX(nc) - GX + M + (self ? SELF_X + 8 : 0), H: rowY(nr) - GY + M + (self ? SELF_Y + 8 : 0) };
}

function Entity({ b }) {
  const { e } = b;
  return (
    <g>
      <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={6} className="erd-box" />
      <rect x={b.x} y={b.y} width={b.w} height={HEAD} rx={6} className="erd-head" />
      <rect x={b.x} y={b.y + HEAD - 6} width={b.w} height={6} className="erd-head" />
      <text x={b.x + PAD} y={b.y + 18} className="erd-name">{e.name}</text>
      <text x={b.x + PAD} y={b.y + HEAD + 17} className="erd-tag">PK</text>
      {e.pk.map((l, j) => (
        <text key={"p" + j} x={b.x + PAD + 24} y={b.y + HEAD + 18 + j * LH} className={"erd-t pk" + (l.includes("FK") ? " fk" : "")}>{l}</text>
      ))}
      <line x1={b.x} x2={b.x + b.w} y1={b.y + HEAD + b.pkH} y2={b.y + HEAD + b.pkH} className="erd-div" />
      {e.at.map((l, j) => (
        <text key={"a" + j} x={b.x + PAD + 24} y={b.y + HEAD + b.pkH + 18 + j * LH} className={"erd-t" + (l.includes("FK") ? " fk" : "")}>{l}</text>
      ))}
    </g>
  );
}

function Relation({ r, P, C }) {
  let x1, y1, x2, y2;
  if (P.e.r === C.e.r) {
    y1 = y2 = Math.max(P.y, C.y) + HEAD + 18;
    if (P.x < C.x) { x1 = P.x + P.w; x2 = C.x; } else { x1 = P.x; x2 = C.x + C.w; }
  } else {
    const lo = Math.max(P.x, C.x), hi = Math.min(P.x + P.w, C.x + C.w);
    x1 = x2 = hi > lo ? (lo + hi) / 2 : P.x + P.w / 2;
    if (P.y < C.y) { y1 = P.y + P.h; y2 = C.y; } else { y1 = P.y; y2 = C.y + C.h; }
  }
  const len = Math.hypot(x2 - x1, y2 - y1);
  const dx = (x2 - x1) / len, dy = (y2 - y1) / len, px = -dy, py = dx;
  const cls = "erd-rel " + (r.id || r.plain ? "id" : "nid");
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const horiz = Math.abs(dy) < 0.5;

  // 선 위 t 위치에 수직 막대(|)
  const barAt = (bx, by, key) => (
    <line key={key} x1={bx + px * 8} y1={by + py * 8} x2={bx - px * 8} y2={by - py * 8} className={cls} />
  );
  const fx = x2 - dx * 14, fy = y2 - dy * 14;

  return (
    <g>
      {r.mix ? (
        <>
          <line x1={x1} y1={y1} x2={mx} y2={my} className={cls + " line"} />
          <line x1={mx} y1={my} x2={x2} y2={y2} className={cls} />
        </>
      ) : (
        <line x1={x1} y1={y1} x2={x2} y2={y2} className={cls + (r.solid ? "" : " line")} />
      )}
      {!r.nb && barAt(x1 + dx * 12, y1 + dy * 12, "pb")}
      <path
        d={`M${fx},${fy} L${x2 + px * 8},${y2 + py * 8} M${fx},${fy} L${x2},${y2} M${fx},${fy} L${x2 - px * 8},${y2 - py * 8}`}
        className={cls}
      />
      {r.co && <circle cx={x2 - dx * 23} cy={y2 - dy * 23} r={5} className={cls + " ring"} />}
      {r.cm && barAt(x2 - dx * 22, y2 - dy * 22, "cm")}
      {r.fb && barAt(x2 - dx * 14, y2 - dy * 14, "fb")}
      {!r.plain && (
        <text
          x={horiz ? mx : mx + 8}
          y={horiz ? my - 9 : my + 4}
          textAnchor={horiz ? "middle" : "start"}
          className={"erd-lbl " + (r.id ? "id" : "nid")}
        >
          {r.id ? "식별" : "비식별"}
        </text>
      )}
    </g>
  );
}

// 끝 기호: 점 E(엔터티 경계)에서 선 쪽으로 향하는 단위벡터 (ux, uy)
function EndMark({ kind, ex, ey, ux, uy, cls }) {
  if (!kind || kind === "none") return null;
  const px = -uy, py = ux;
  const bar = (t) => {
    const bx = ex + ux * t, by = ey + uy * t;
    return <line x1={bx + px * 8} y1={by + py * 8} x2={bx - px * 8} y2={by - py * 8} className={cls} />;
  };
  const crow = () => {
    const fx = ex + ux * 14, fy = ey + uy * 14;
    return <path d={`M${fx},${fy} L${ex + px * 8},${ey + py * 8} M${fx},${fy} L${ex},${ey} M${fx},${fy} L${ex - px * 8},${ey - py * 8}`} className={cls} />;
  };
  const ring = (t) => <circle cx={ex + ux * t} cy={ey + uy * t} r={5} className={cls + " ring"} />;
  switch (kind) {
    case "one": return bar(12);
    case "zeroOne": return <>{bar(10)}{ring(20)}</>;
    case "many": return crow();
    case "oneMany": return <>{crow()}{bar(18)}</>;
    case "zeroMany": return <>{crow()}{ring(23)}</>;
    default: return null;
  }
}

function RelationV2({ r, A, B }) {
  const cls = "erd-rel " + (r.label === "비식별" ? "nid" : "id");
  let pts, ua, ub; // pts: 선을 이루는 점들(A 끝 → B 끝), ua/ub: 각 끝에서 선 쪽 방향
  if (r.route === "self") {
    // 자기 참조: A 끝 = 오른쪽 변(FK 속성 행 높이), B 끝 = 아래변. 오른쪽 → 아래 → 왼쪽으로 돌아 들어옴
    const b = A;
    const fi = b.e.at.findIndex((l) => l.includes("FK"));
    const ay = fi >= 0 ? b.y + HEAD + b.pkH + 13 + fi * LH : b.y + b.h / 2;
    const rx = b.x + b.w, by = b.y + b.h;
    const ox = rx + SELF_X, oy = by + SELF_Y, bx = b.x + b.w * (r.ux ?? 0.6);
    pts = [[rx, ay], [ox, ay], [ox, oy], [bx, oy], [bx, by]];
    ua = [1, 0]; ub = [0, 1];
  } else if (r.route === "elbow") {
    const up = A.y <= B.y ? A : B, low = up === A ? B : A;
    const sx = up.x + up.w * (r.ux ?? 0.5), sy = up.y + up.h;
    const ty = low.y + HEAD + 18;
    const toRight = low.x > sx;
    const tx = toRight ? low.x : low.x + low.w;
    const startU = [0, 1], endU = [toRight ? -1 : 1, 0];
    const path = [[sx, sy], [sx, ty], [tx, ty]];
    if (up === A) { pts = path; ua = startU; ub = endU; } else { pts = path.slice().reverse(); ua = endU; ub = startU; }
  } else {
    let x1, y1, x2, y2;
    if (A.e.r === B.e.r) {
      y1 = y2 = Math.max(A.y, B.y) + HEAD + 18;
      if (A.x < B.x) { x1 = A.x + A.w; x2 = B.x; } else { x1 = A.x; x2 = B.x + B.w; }
    } else {
      const lo = Math.max(A.x, B.x), hi = Math.min(A.x + A.w, B.x + B.w);
      x1 = x2 = hi > lo ? (lo + hi) / 2 : A.x + A.w / 2;
      if (A.y < B.y) { y1 = A.y + A.h; y2 = B.y; } else { y1 = A.y; y2 = B.y + B.h; }
    }
    const len = Math.hypot(x2 - x1, y2 - y1), dx = (x2 - x1) / len, dy = (y2 - y1) / len;
    pts = [[x1, y1], [x2, y2]]; ua = [dx, dy]; ub = [-dx, -dy];
  }
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + "," + p[1]).join(" ");
  let lines;
  if (r.line === "mix" && pts.length === 2) {
    const [[x1, y1], [x2, y2]] = pts, mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    lines = <><line x1={x1} y1={y1} x2={mx} y2={my} className={cls + " dash"} /><line x1={mx} y1={my} x2={x2} y2={y2} className={cls} /></>;
  } else {
    lines = <path d={d} className={cls + (r.line === "dashed" ? " dash" : "")} />;
  }
  const [lx1, ly1] = pts[0], [lx2, ly2] = pts[pts.length - 1];
  const mx = (pts[pts.length === 3 ? 1 : 0][0] + lx2) / 2, my = (pts[pts.length === 3 ? 1 : 0][1] + ly2) / 2;
  const horiz = Math.abs(ly2 - (pts.length === 3 ? pts[1][1] : ly1)) < 1;
  return (
    <g>
      {lines}
      <EndMark kind={r.aEnd} ex={lx1} ey={ly1} ux={ua[0]} uy={ua[1]} cls={cls} />
      <EndMark kind={r.bEnd} ex={lx2} ey={ly2} ux={ub[0]} uy={ub[1]} cls={cls} />
      {r.label && (
        <text x={horiz ? mx : mx + 8} y={horiz ? my - 9 : my + 4} textAnchor={horiz ? "middle" : "start"}
          className={"erd-lbl " + (r.label === "비식별" ? "nid" : "id")}>{r.label}</text>
      )}
    </g>
  );
}

function Legend({ d }) {
  const isV2 = (r) => r.a !== undefined;
  const hasId = d.rels.some((r) => (isV2(r) ? r.label === "식별" && r.line !== "dashed" : r.id));
  const hasN = d.rels.some((r) => (isV2(r) ? r.line === "dashed" && r.label !== "식별" : !r.id && !r.solid));
  const fk = (<><span className="lg-fk">파란 글씨</span> = 상속된 FK</>);
  return (
    <div className="erd-legend">
      {hasId && (
        <div>
          <svg width={40} height={10}><line x1={0} x2={40} y1={5} y2={5} className="erd-rel id line" /></svg>
          <span><b className="lg-id">실선 = 식별관계</b> 부모의 PK가 자식의 PK(구분선 위)로 들어감</span>
        </div>
      )}
      {hasN && (
        <div>
          <svg width={40} height={10}><line x1={0} x2={40} y1={5} y2={5} className="erd-rel nid line" /></svg>
          <span><b className="lg-nid">점선 = 비식별관계</b> 부모의 PK가 자식의 일반 속성(구분선 아래)으로 들어감</span>
        </div>
      )}
      <div className="lg-sym">
        {d.noSym || d.note ? <>{d.note} · {fk}</> : <>부모 쪽 | = 1 · 자식 쪽 까마귀발 = N(다수) · 까마귀발 옆 | = 필수, ○ = 선택 · {fk}</>}
      </div>
    </div>
  );
}

export default function Erd({ data: d }) {
  const { boxes, W, H } = layout(d);
  return (
    <div className="erd">
      <div className="scroll">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="erd-svg" role="img">
          {Object.values(boxes).map((b) => <Entity key={b.e.name} b={b} />)}
          {d.rels.map((r, i) => r.a !== undefined
            ? <RelationV2 key={i} r={r} A={boxes[r.a]} B={boxes[r.b]} />
            : <Relation key={i} r={r} P={boxes[r.p]} C={boxes[r.ch]} />)}
        </svg>
      </div>
      {d.rels.length > 0 && <Legend d={d} />}
    </div>
  );
}
