// 문제·해설 문자열에 들어 있는 <u>, <b>, <br> 같은 간단한 태그를 그대로 렌더링합니다.
export default function Html({ as: Tag = "span", html, className }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
