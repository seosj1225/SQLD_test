import Html from "./Html.jsx";
import DataTable from "./DataTable.jsx";
import Erd from "./Erd.jsx";

// 문제 지문 블록: SQL 코드, 테이블, 설명 박스, ERD
export default function Block({ block: b }) {
  if (b.code) return <pre className="code">{b.code}</pre>;
  if (b.table) return <DataTable table={b.table} title={b.title} />;
  if (b.box) return <Html as="div" className="box" html={b.box} />;
  if (b.erd) return <Erd data={b.erd} />;
  return null;
}
