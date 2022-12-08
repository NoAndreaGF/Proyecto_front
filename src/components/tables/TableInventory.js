import { useState } from "react";

import useTable from "../../hooks/useTable";

import TableFooter from "./table-footer/TableFooter";

function TableInventory({ changeState, dataset, show }) {
  const [page, setPage] = useState(1);

  const { slice, range } = useTable(dataset, page, show);
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    if (active === index) {
      setActive(0);
      changeState(0);
    } else {
      changeState(index);
      setActive(index);
    }
  };

  return (
    <div
      className="table-responsive table mt-2"
      id="dataTable"
      role="grid"
      aria-describedby="dataTable_info"
    >
      <table className="table table-hover my-0">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">ID</th>
            <th className="tableHeader">Tipo</th>
            <th className="tableHeader">Fecha</th>
            <th className="tableHeader">Producto</th>
            <th className="tableHeader">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr
              className={`tableRowItems ${
                (el.idIn ? el.idIn : el.idOut) === active ? "table-success" : ""
              }`}
              key={el.idIn ? el.idIn : el.idOut}
              onClick={() => handleClick(el.idIn ? el.idIn : el.idOut)}
            >
              <td className="tableCell">{el.idIn ? el.idIn : el.idOut}</td>
              <td className="tableCell">{el.idIn ? "Entrada" : "Salida"}</td>
              <td className="tableCell">{el.date}</td>
              <td className="tableCell">{el.product.name}</td>
              <td className="tableCell">{el.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      
    </div>
  );
}
export default TableInventory;
