import { useEffect, useRef, useState } from "react";
import Question from "./components/Question.jsx";
import Omr from "./components/Omr.jsx";
import Results from "./components/Results.jsx";
import { SUBJ } from "./constants.js";
import { loadState, saveState } from "./storage.js";

function fmt(sec) {
  const s = Math.max(0, sec);
  const m = Math.floor(s / 60);
  return String(m).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

// phase: intro(표지) → exam(풀이, 고르면 바로 채점) → result(성적표) → review(해설 보기)
export default function Exam({ exam, onBack }) {
  const QUESTIONS = exam.questions;
  const total = QUESTIONS.length;
  const [init] = useState(() => loadState(exam.id) || {});
  const [answers, setAnswers] = useState(init.answers || {});
  const [cur, setCur] = useState(init.cur || 1);
  const [phase, setPhase] = useState(init.phase || "intro");
  const [endAt, setEndAt] = useState(init.endAt || null);
  const [now, setNow] = useState(Date.now());
  const [wrongOnly, setWrongOnly] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [sheet, setSheet] = useState(false);
  const topRef = useRef(null);

  useEffect(() => saveState(exam.id, { answers, cur, phase, endAt }), [exam.id, answers, cur, phase, endAt]);

  useEffect(() => {
    if (phase !== "exam") return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  const left = endAt ? Math.round((endAt - now) / 1000) : exam.minutes * 60;
  useEffect(() => {
    if (phase === "exam" && endAt && left <= 0) setPhase("result");
  }, [left, phase, endAt]);

  const graded = phase === "review";
  const list = graded && wrongOnly ? QUESTIONS.filter((q) => answers[q.n] !== q.a) : QUESTIONS;
  const idx = Math.max(0, list.findIndex((q) => q.n === cur));
  const q = list[idx] || QUESTIONS[0];
  const answered = Object.values(answers).filter(Boolean).length;
  const correct = QUESTIONS.filter((x) => answers[x.n] === x.a).length;

  const go = (n) => {
    setCur(n);
    setSheet(false);
    topRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const pick = (n, k) => setAnswers((a) => ({ ...a, [n]: k }));
  const start = () => {
    setAnswers({});
    setCur(1);
    setEndAt(Date.now() + exam.minutes * 60000);
    setNow(Date.now());
    setPhase("exam");
  };
  const resume = () => {
    if (!endAt) setEndAt(Date.now() + exam.minutes * 60000);
    setPhase("exam");
  };

  // 키보드: ← → 이동, 1~4 답 선택
  useEffect(() => {
    const onKey = (e) => {
      if (phase !== "exam" && phase !== "review") return;
      if (e.target.tagName === "INPUT") return;
      if (e.key === "ArrowRight" && list[idx + 1]) go(list[idx + 1].n);
      if (e.key === "ArrowLeft" && list[idx - 1]) go(list[idx - 1].n);
      if (phase === "exam" && !answers[q.n] && ["1", "2", "3", "4"].includes(e.key)) pick(q.n, +e.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const header = (
    <header className="bar-top">
      <div className="brand">
        {onBack && <button className="btn ghost sm" onClick={onBack}>← 회차</button>}
        <span className="round">제{exam.round}회</span>
        <span className="brand-t">SQLD 기출 복원 모의고사</span>
      </div>
      {phase === "exam" && (
        <div className="stat">
          <span className="pill score">정답 {correct} / {answered}</span>
          <span className="pill">{answered} / {total}</span>
          <span className={"pill timer" + (left < 600 ? " warn" : "")}>{fmt(left)}</span>
          <button className="btn primary sm" onClick={() => setConfirm(true)}>제출</button>
        </div>
      )}
      {graded && (
        <div className="stat">
          <label className="toggle">
            <input
              id="wrongOnly"
              type="checkbox"
              checked={wrongOnly}
              onChange={(e) => {
                setWrongOnly(e.target.checked);
                if (e.target.checked) {
                  const w = QUESTIONS.find((x) => answers[x.n] !== x.a);
                  if (w) setCur(w.n);
                }
              }}
            />
            틀린 문제만
          </label>
          <button className="btn sm" onClick={() => setPhase("result")}>성적표</button>
        </div>
      )}
    </header>
  );

  if (phase === "intro") {
    const has = Object.keys(answers).length > 0 && init.phase === "exam";
    return (
      <div className="page">
        {header}
        <main className="intro">
          <div className="cover">
            <div className="cover-eyebrow">{exam.date} 시행 · FINAL 기출 복원</div>
            <h1>제<em>{exam.round}</em>회 기출 복원 모의고사</h1>
            <dl className="cover-meta">
              <div><dt>제한시간</dt><dd>{exam.minutes}분</dd></div>
              <div><dt>문항</dt><dd>{total}문항 · 문항당 2점</dd></div>
              <div><dt>1과목</dt><dd>데이터 모델링의 이해 {QUESTIONS.filter((x) => x.s === 1).length}문항</dd></div>
              <div><dt>2과목</dt><dd>SQL 기본 및 활용 {QUESTIONS.filter((x) => x.s === 2).length}문항</dd></div>
            </dl>
            <p className="cover-note">
              보기를 누르거나 키보드 1~4로 답을 고르면 바로 정답과 해설이 나옵니다. ← → 로 문제를 넘기고, 다 풀면 제출해서
              과목별 점수와 합격 여부를 확인하세요. 답안은 이 브라우저에 저장되어 새로고침해도 이어서 풀 수 있습니다.
            </p>
            <div className="cover-actions">
              {has && <button className="btn primary" onClick={resume}>이어서 풀기 ({answered}문항 답함)</button>}
              <button className={"btn " + (has ? "" : "primary")} onClick={start}>{has ? "새로 시작" : "시험 시작"}</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div className="page">
        {header}
        <main className="wrap">
          <Results
            questions={QUESTIONS}
            answers={answers}
            onReview={(n, wrong) => {
              setWrongOnly(!!wrong);
              setCur(n);
              setPhase("review");
            }}
            onRetry={() => {
              setAnswers({});
              setEndAt(null);
              setPhase("intro");
            }}
          />
        </main>
      </div>
    );
  }

  const isLast = idx >= list.length - 1;
  return (
    <div className="page">
      {header}
      <main className="exam">
        <aside className={"side" + (sheet ? " open" : "")}>
          <div className="side-title">{graded ? "채점 결과" : "답안지"}</div>
          <Omr questions={QUESTIONS} answers={answers} cur={q.n} go={go} graded={graded} instant={phase === "exam"} />
        </aside>

        <section className="main" ref={topRef}>
          {(q === QUESTIONS.find((x) => x.s === q.s)) && <div className="subj-banner">{SUBJ[q.s]}</div>}
          <Question q={q} picked={answers[q.n]} onPick={pick} graded={graded || (phase === "exam" && !!answers[q.n])} />
          <nav className="pager">
            <button className="btn" disabled={idx === 0} onClick={() => go(list[idx - 1].n)}>← 이전</button>
            <span className="pager-pos">{idx + 1} / {list.length}</span>
            {!isLast ? (
              <button className="btn primary" onClick={() => go(list[idx + 1].n)}>다음 →</button>
            ) : phase === "exam" ? (
              <button className="btn primary" onClick={() => setConfirm(true)}>제출하기</button>
            ) : (
              <button className="btn primary" onClick={() => setPhase("result")}>성적표</button>
            )}
          </nav>
        </section>

        <button className="sheet-btn" onClick={() => setSheet((s) => !s)}>
          {sheet ? "닫기" : `답안지 ${answered}/${total}`}
        </button>
      </main>

      {confirm && (
        <div className="modal-bg" onClick={() => setConfirm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>답안을 제출할까요?</h3>
            <p>
              {answered < total
                ? `아직 ${total - answered}문항을 풀지 않았습니다. 푼 문항만 채점됩니다.`
                : `${total}문항 모두 답했습니다.`}
            </p>
            <div className="modal-actions">
              <button className="btn" onClick={() => setConfirm(false)}>계속 풀기</button>
              <button
                className="btn primary"
                onClick={() => {
                  setConfirm(false);
                  setPhase("result");
                }}
              >
                제출하고 채점
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
