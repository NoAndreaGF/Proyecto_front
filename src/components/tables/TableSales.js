import { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./table-footer/TableFooter";

function TableSales({ setActiveOrder, dataset, show }) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(dataset, page, show);
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
            <th className="tableHeader">Fecha de orden</th>
            <th className="tableHeader">Fecha de entrega</th>
            <th className="tableHeader">Estatus</th>
            <th className="tableHeader">Total</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className="tableRowItems" key={el.idOrder}>
              <td className="tableCell">{el.idOrder}</td>
              <td className="tableCell">{el.orderDate}</td>
              <td className="tableCell">{el.deliveryDate}</td>
              <td className="tableCell">{el.status}</td>
              <td className="tableCell">{el.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}

export default TableSales;
