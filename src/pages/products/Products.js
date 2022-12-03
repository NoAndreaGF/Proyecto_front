import { Outlet } from "react-router-dom";

import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

function Products() {
  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Productos"
        subtitle="Administra productos"
        icon={faBarcode}
      />
      <Outlet />
    </div>
  );
}

export default Products;
