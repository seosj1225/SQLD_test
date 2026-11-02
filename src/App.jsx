import { useState } from "react";
import { exams } from "./data/index.js";
import Exam from "./Exam.jsx";

// 회차가 하나면 바로 그 회차로, 여러 개면 회차 선택 화면을 보여줍니다.
export default function App() {
  const [examId, setExamId] = useState(exams.length === 1 ? exams[0].id : null);
  const exam = exams.find((e) => e.id === examId);

  if (exam) {
    return <Exam key={exam.id} exam={exam} onBack={exams.length > 1 ? () => setExamId(null) : null} />;
  }

  return (
    <div className="page">
      <header className="bar-top">
        <div className="brand">
          <span className="round">SQLD</span>
          <span className="brand-t">기출 복원 모의고사</span>
        </div>
      </header>
      <main className="intro">
        <div className="cover">
          <div className="cover-eyebrow">회차 선택</div>
          <h1>풀 회차를 고르세요</h1>
          <div className="exam-list">
            {exams.map((e) => (
              <button key={e.id} className="exam-item" onClick={() => setExamId(e.id)}>
                <span className="exam-round">제{e.round}회</span>
                <span className="exam-date">{e.date} · {e.questions.length}문항 · {e.minutes}분</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
