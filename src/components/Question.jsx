import Html from "./Html.jsx";
import Block from "./Block.jsx";
import DataTable from "./DataTable.jsx";
import { MARK } from "../constants.js";

function OptionBody({ o }) {
  if (typeof o === "string") return <Html className="opt-text" html={o} />;
  return (
    <div className="opt-rich">
      {o.text && <Html className="opt-text" html={o.text} />}
      {o.code && <pre className="code sm">{o.code}</pre>}
      {o.table && <DataTable table={o.table} />}
    </div>
  );
}

// graded가 true면 정답/오답 표시와 해설을 보여주고 보기를 잠급니다.
export default function Question({ q, picked, onPick, graded }) {
  const short = q.o.every((o) => typeof o === "string" && o.length <= 14);

  return (
    <article className="q">
      <div className="q-head">
        <span className="q-num">{String(q.n).padStart(2, "0")}</span>
        <span className="q-topic">{q.topic}</span>
      </div>
      <Html as="h2" className="q-stem" html={q.q} />

      {q.b && (
        <div className="q-blocks">
          {q.b.map((b, i) => <Block key={i} block={b} />)}
        </div>
      )}

      <div className={"opts" + (short ? " grid" : "")} role="radiogroup">
        {q.o.map((o, i) => {
          const k = i + 1;
          let cls = "opt";
          if (picked === k) cls += " picked";
          if (graded) {
            if (k === q.a) cls += " correct";
            else if (picked === k) cls += " wrong";
          }
          return (
            <button
              key={i}
              className={cls}
              role="radio"
              aria-checked={picked === k}
              disabled={graded}
              onClick={() => onPick(q.n, picked === k ? null : k)}
            >
              <span className="bubble">{MARK[i]}</span>
              <OptionBody o={o} />
            </button>
          );
        })}
      </div>

      {graded && (
        <div className={"explain " + (picked === q.a ? "ok" : "no")}>
          <div className="explain-head">
            <strong>{picked === q.a ? "정답" : picked ? "오답" : "미응답"}</strong>
            <span>
              정답 {MARK[q.a - 1]}
              {picked && picked !== q.a ? " · 내 답 " + MARK[picked - 1] : ""}
            </span>
          </div>
          <Html as="p" html={q.e} />
        </div>
      )}
    </article>
  );
}
