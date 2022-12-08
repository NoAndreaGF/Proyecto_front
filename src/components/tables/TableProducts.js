import { useState } from "react";

import useTable from "../../hooks/useTable";

import TableFooter from "./table-footer/TableFooter";

function TableProducts({ changeState, dataset, show }) {
  const [page, setPage] = useState(1);

  const { slice, range } = useTable(dataset, page, show);
  const [active, setActive] = useState(0);

  const handleClick = (el) => {
    const index = el.idProduct;
    if (active === index) {
      setActive(0);
      changeState(0);
    } else {
      changeState(el);
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
            <th className="tableHeader">Marca</th>
            <th className="tableHeader">Descripción</th>
            <th className="tableHeader">Precio</th>
            <th className="tableHeader">Stock</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr
              className={`tableRowItems ${
                el.idProduct === active ? "table-success" : ""
              }`}
              key={el.idProduct}
              onClick={() => handleClick(el)}
            >
              <td className="tableCell">{el.idProduct}</td>
              <td className="tableCell">{el.name}</td>
              <td className="tableCell">{el.brand}</td>
              <td className="tableCell">{el.description}</td>
              <td className="tableCell">{el.price}</td>
              <td className="tableCell">{el.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}

export default TableProducts;
