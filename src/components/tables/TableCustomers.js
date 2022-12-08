import { useState } from "react";

import useTable from "../../hooks/useTable";

import TableFooter from "./table-footer/TableFooter";

function TableCustomers({ changeState, dataset, show }) {
  const [page, setPage] = useState(1);

  const { slice, range } = useTable(dataset, page, show);
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    if (active === index) {
      setActive(0);
      changeState(0);
    }
    else {
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
            <th className="tableHeader">Nombre</th>
            <th className="tableHeader">Apellido</th>
            <th className="tableHeader">Teléfono</th>
            <th className="tableHeader">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr
              className={`tableRowItems ${
                el.idCustomer === active ? "table-success" : ""
              }`}
              key={el.idCustomer}
              onClick={() => handleClick(el.idCustomer)}
            >
              <td className="tableCell">{el.idCustomer}</td>
              <td className="tableCell">{el.name}</td>
              <td className="tableCell">{el.lastName}</td>
              <td className="tableCell">{el.phone}</td>
              <td className="tableCell">{el.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}

export default TableCustomers;
