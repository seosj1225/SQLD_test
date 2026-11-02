import { MARK } from "../constants.js";

// OMR 답안지. graded: 전체 채점 표시, instant: 답한 문항만 즉시 채점 표시
export default function Omr({ questions, answers, cur, go, graded, instant }) {
  const groups = [
    { label: "1과목", list: questions.filter((q) => q.s === 1) },
    { label: "2과목", list: questions.filter((q) => q.s === 2) },
  ];
  return (
    <div className="omr">
      {groups.map((g) => (
        <div key={g.label} className="omr-group">
          <div className="omr-label">{g.label}</div>
          <div className="omr-grid">
            {g.list.map((q) => {
              const p = answers[q.n];
              let cls = "omr-cell";
              if (q.n === cur) cls += " cur";
              if (p) cls += " done";
              if (graded || (instant && p)) cls += p === q.a ? " ok" : " no";
              return (
                <button key={q.n} className={cls} onClick={() => go(q.n)} aria-label={q.n + "번"}>
                  <span className="omr-n">{q.n}</span>
                  <span className="omr-a">{p ? MARK[p - 1] : "·"}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
