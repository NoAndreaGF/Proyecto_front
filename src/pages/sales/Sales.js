import { Outlet } from "react-router-dom";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

function Sales() {
  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Ventas"
        subtitle="Administra ventas"
        icon={faShoppingCart}
      />
      <Outlet />
    </div>
  );
}

export default Sales;