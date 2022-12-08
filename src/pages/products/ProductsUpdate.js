import { useState } from "react";
import { useLocation } from "react-router-dom";

import ButtonBack from "../../components/buttons/button-back";
import FormProducts from "../../components/form-products/FormProducts";

import ProductService from "../../services/ProductService";

function ProductsUpdate() {
  const [errMsg, setErrMsg] = useState("");
  const { state } = useLocation();

  const index = state.index;
  let name = state.product.name;
  let brand = state.product.brand;
  let description = state.product.description;
  let price = state.product.price;
  let stock = state.product.stock;

  const handle = (index, data) => {
    ProductService.update(index, data)
      .then((response) => {
        if (!response?.data?.errors) {
          if (response.data !== "406") {
            setErrMsg("");
            alert(response.data);
          } else if (response.data === "406") {
            setErrMsg("Producto existente.");
          }
        } else {
          setErrMsg("Registro fallido");
        }
      })
      .catch((e) => {
        if (!e?.response) {
          setErrMsg("Fallo en el Servidor");
        } else {
          setErrMsg("Registro fallido");
        }
      });
  };

  return (
    <div className="container p-0">
      <div className="form-row">
        <ButtonBack link="/productos" />
      </div>

      <FormProducts
        title="Actualizar producto"
        button="Actualizar"
        handle={handle}
        msg={errMsg}
        index={index}
        nameProduct={name}
        brandProduct={brand}
        descriptionProduct={description}
        priceProduct={price}
        stockProduct={stock}
      />
    </div>
  );
}

export default ProductsUpdate;
