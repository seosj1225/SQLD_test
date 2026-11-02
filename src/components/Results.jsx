import { useMemo } from "react";
import { SUBJ } from "../constants.js";

// 합격 기준: 총점 60점 이상 + 과목별 40% 이상 (문항당 2점)
export default function Results({ questions, answers, onReview, onRetry }) {
  const r = useMemo(() => {
    const by = { 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 } };
    const wrongTopics = {};
    questions.forEach((q) => {
      by[q.s].t++;
      if (answers[q.n] === q.a) by[q.s].c++;
      else (wrongTopics[q.topic] = wrongTopics[q.topic] || []).push(q.n);
    });
    const total = (by[1].c + by[2].c) * 2;
    const cut1 = by[1].c * 2 >= by[1].t * 2 * 0.4;
    const cut2 = by[2].c * 2 >= by[2].t * 2 * 0.4;
    return { by, total, cut1, cut2, pass: total >= 60 && cut1 && cut2, wrongTopics };
  }, [questions, answers]);

  const topics = Object.entries(r.wrongTopics).sort((a, b) => b[1].length - a[1].length);

  return (
    <section className="results">
      <div className="score-card">
        <div className="score-main">
          <div className="score-label">총점</div>
          <div className="score-num">
            {r.total}
            <small> / 100</small>
          </div>
        </div>
        <div className={"verdict " + (r.pass ? "pass" : "fail")}>{r.pass ? "합격" : "불합격"}</div>
        <p className="rule">합격 기준: 총점 60점 이상, 과목별 40% 이상 (1과목 8점 · 2과목 32점)</p>
      </div>

      <div className="subj-rows">
        {[1, 2].map((s) => {
          const b = r.by[s];
          const pts = b.c * 2, max = b.t * 2;
          const ok = s === 1 ? r.cut1 : r.cut2;
          return (
            <div className="subj" key={s}>
              <div className="subj-top">
                <span>{SUBJ[s]}</span>
                <span className="subj-pts">{pts} / {max}점</span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{ width: (pts / max) * 100 + "%" }} />
                <div className="bar-cut" style={{ left: "40%" }} />
              </div>
              <div className="subj-meta">{b.c}문항 정답 · {ok ? "과락 통과" : "과락"}</div>
            </div>
          );
        })}
      </div>

      {topics.length > 0 && (
        <div className="weak">
          <h3>틀린 영역</h3>
          <ul>
            {topics.map(([t, ns]) => (
              <li key={t}>
                <span>{t}</span>
                <span className="weak-ns">
                  {ns.map((n) => <button key={n} onClick={() => onReview(n)}>{n}</button>)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="res-actions">
        <button className="btn primary" onClick={() => onReview(topics.length ? topics[0][1][0] : 1, true)}>틀린 문제 해설 보기</button>
        <button className="btn" onClick={() => onReview(1)}>전체 해설 보기</button>
        <button className="btn ghost" onClick={onRetry}>처음부터 다시 풀기</button>
      </div>
    </section>
  );
}
