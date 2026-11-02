export default function DataTable({ table, title }) {
  return (
    <div className="tbl-wrap">
      {title && <div className="tbl-title">[{title}]</div>}
      <div className="scroll">
        <table>
          <thead>
            <tr>{table.h.map((c, i) => <th key={i}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {table.r.map((row, i) => (
              <tr key={i}>
                {row.map((c, j) => (
                  <td key={j} className={c === "NULL" ? "null" : ""}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
