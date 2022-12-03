import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import TablePage from "../components/table-pages/table-pages";
import SalesTitle from "../components/sales-title/sales-title";
import ButtonBig from "../components/buttons/button-big";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Sales() {
  const [sales, setSales] = useState();
  const [orders, setOrders] = useState();

  useEffect(() => {
    retriveOredersSales();
  }, []);

  const retriveOredersSales = () => {
    OrderService.getAll()
      .then((response) => {
        setSales(response.data.length);
        setOrders(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container-fluid">
      <SalesTitle data={sales} />

      <div className="row-pages col-xl">
        <TablePage data={orders} />
        <div className="col">
          <ButtonBig icon={faPlus} link="/ventas/agregar" />
          <ButtonBig icon={faEdit} link="/ventas/actualizar" />
          <ButtonBig icon={faTrash} link="/ventas" />
        </div>
      </div>
    </div>
  );
}

export default Sales;

export default Sales;