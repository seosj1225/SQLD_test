// 브라우저 localStorage에 회차별 풀이 상태를 저장합니다.
const key = (id) => "sqld-exam-" + id;

export function loadState(id) {
  try {
    return JSON.parse(localStorage.getItem(key(id))) || null;
  } catch {
    return null;
  }
}

export function saveState(id, state) {
  try {
    localStorage.setItem(key(id), JSON.stringify(state));
  } catch {
    /* 저장 불가 환경(시크릿 모드 등)은 무시 */
  }
}
