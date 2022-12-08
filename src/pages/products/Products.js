import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

import ProductService from "../../services/ProductService";

function Products() {
  const [products, setProducts] = useState(0);

  useEffect(() => {
    retriveProducts();
  }, []);

  const retriveProducts = () => {
    ProductService.getAll()
    .then(response => {
      setProducts(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Productos"
        subtitle="Administra productos"
        icon={faBarcode}
        count={products}
      />
      <Outlet />
    </div>
  );
}

export default Products;
