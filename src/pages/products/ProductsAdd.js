import { useState } from "react";

import ProductService from "../../services/ProductService";

import ButtonBack from "../../components/buttons/button-back";
import FormProducts from "../../components/form-products/FormProducts";

function ProductsAdd() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const handle = (index, data) => {
    ProductService.create(data)
      .then((response) => {
        if (!response?.data?.errors) {
          if (response.data !== "406") {
            setName("");
            setBrand("");
            setDescription("");
            setStock("");
            setPrice("");
            setErrMsg("");
            window.location.reload();
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
        title="Crear producto"
        button="Registrar"
        handle={handle}
        msg={errMsg}
        nameProduct={name}
        brandProduct={brand}
        descriptionProduct={description}
        priceProduct={price}
        stockProduct={stock}
      />
    </div>
  );
}

export default ProductsAdd;
