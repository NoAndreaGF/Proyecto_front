import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

import OrderService from "../../services/OrderService";

function Sales() {
  const [sales, setSales] = useState(0);

  useEffect(() => {
    retriveOrders();
  }, []);

  const retriveOrders = () => {
    OrderService.getAll()
    .then(response => {
      setSales(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Ventas"
        subtitle="Administra ventas"
        icon={faShoppingCart}
        count={sales}
      />
      <Outlet />
    </div>
  );
}

export default Sales;