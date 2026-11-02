# SQLD 기출 복원 모의고사

SQLD 기출 복원 모의고사를 실제 시험처럼 풀어볼 수 있는 React 웹앱입니다.

- 90분 타이머, OMR 답안지
- 보기를 고르면 바로 정답·해설 표시
- 제출 시 총점, 과목별 과락(40%), 합격 여부, 틀린 영역 정리
- 틀린 문제만 다시 보기
- 풀이 상태는 브라우저(localStorage)에 저장

## 수록 회차

| 회차 | 시행 | 문항 |
| --- | --- | --- |
| 제59회 | 2025년 11월 | 50 |

## 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # dist/ 에 배포용 파일 생성
```

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소에 push 합니다.
2. 저장소 **Settings → Pages → Source** 를 **GitHub Actions** 로 바꿉니다.
3. `main` 브랜치에 push 할 때마다 `.github/workflows/deploy.yml` 이 빌드·배포합니다.
4. 주소: `https://<아이디>.github.io/<저장소이름>/`

## 회차 추가하기

1. `src/data/exams/exam59.js` 를 복사해 `exam60.js` 같은 새 파일을 만들고 내용을 바꿉니다.
2. `src/data/index.js` 의 `exams` 배열에 추가합니다.

```js
import exam59 from "./exams/exam59.js";
import exam60 from "./exams/exam60.js";

export const exams = [exam60, exam59];
```

회차가 2개 이상이면 첫 화면에 회차 선택 목록이 나타납니다.

### 문제 데이터 형식

```js
{
  n: 12,                 // 문항 번호
  s: 2,                  // 과목 (1: 데이터 모델링, 2: SQL)
  topic: "서브쿼리",       // 출제 영역 (성적표의 '틀린 영역'에 사용)
  q: "아래 SQL의 실행 결과는?",   // 문제 (<u>, <b>, <br> 사용 가능)
  b: [                   // 지문 블록 (선택)
    { title: "상품", table: { h: ["상품ID", "가격"], r: [["P01", "18000"]] } },
    { code: "SELECT ..." },
    { box: "설명 박스 (줄바꿈은 \\n)" },
    { erd: { ents: [...], rels: [...] } }
  ],
  o: ["2", "3", "4", "5"],  // 보기: 문자열 | { code } | { table } | { text, code }
  a: 1,                  // 정답 (1~4)
  e: "해설"               // 해설 (HTML 가능)
}
```

ERD 형식은 `src/components/Erd.jsx` 상단 주석을 참고하세요.

## 구조

```
src/
├─ main.jsx              진입점
├─ App.jsx               회차 선택
├─ Exam.jsx              시험 화면 (표지 → 풀이 → 성적표 → 해설)
├─ components/
│  ├─ Question.jsx       문제·보기·해설
│  ├─ Block.jsx          지문 블록 (코드/테이블/박스/ERD)
│  ├─ DataTable.jsx      테이블
│  ├─ Erd.jsx            ERD (SVG)
│  ├─ Omr.jsx            OMR 답안지
│  ├─ Results.jsx        성적표
│  └─ Html.jsx           HTML 문자열 렌더링
├─ data/
│  ├─ index.js           회차 목록
│  └─ exams/exam59.js    제59회 문제·정답·해설
├─ constants.js
├─ storage.js
└─ styles.css
```
