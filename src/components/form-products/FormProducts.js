import { useState, useEffect } from "react";

const NAME_REGEX = /^[a-zA-Z0-9\s]{3,30}/;
const BRAND_REGEX = /^[a-zA-Z0-9]{3,20}/;
const DESCRIPTION_REGEX = /[^\s]{3,100}/;
const STOCK_REGEX = /^[0-9\d]/;
const PRICE_REGEX = /^\d+(.\d{1,2})?$/;

function FormProducts({
  title,
  button,
  handle,
  msg,
  index,
  nameProduct,
  brandProduct,
  descriptionProduct,
  stockProduct,
  priceProduct,
}) {
  const [name, setName] = useState(nameProduct);
  const [brand, setBrand] = useState(brandProduct);
  const [description, setDescription] = useState(descriptionProduct);
  const [stock, setStock] = useState(stockProduct);
  const [price, setPrice] = useState(priceProduct);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg(msg);
  }, [msg]);

  useEffect(() => {
    setName(nameProduct);
    setBrand(brandProduct);
    setDescription(descriptionProduct);
    setStock(stockProduct);
    setPrice(priceProduct);
  }, [
    nameProduct,
    brandProduct,
    descriptionProduct,
    stockProduct,
    priceProduct,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = NAME_REGEX.test(name);
    const v2 = BRAND_REGEX.test(brand);
    const v3 = DESCRIPTION_REGEX.test(description);
    const v4 = STOCK_REGEX.test(stock);
    const v5 = PRICE_REGEX.test(price);

    if (!v1) {
      setErrMsg("Nombre Invalido");
      return;
    } else if (!v2) {
      setErrMsg("Marca Invalida");
      return;
    } else if (!v3) {
      setErrMsg("Descripcion Invalida");
      return;
    } else if (!v4) {
      setErrMsg("Stock Invalido");
      return;
    } else if (!v5) {
      setErrMsg("Precio Invalido");
      return;
    } else {
      setErrMsg("");
    }

    let data = {
      name: name,
      brand: brand,
      description: description,
      stock: stock,
      price: price,
    };

    handle(index, data);
  };

  return (
    <div className="card shadow-lg border-0 my-0">
      <div className="card-body p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">{title}</h4>
                  <p
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Nombre"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => setBrand(e.target.value)}
                        value={brand}
                        placeholder="Proveedor"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-control-user"
                      type="text"
                      required
                      autoComplete="off"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      placeholder="Descripcion"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="number"
                        required
                        autoComplete="off"
                        onChange={(e) => setStock(e.target.value)}
                        value={stock}
                        placeholder="Stock"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        placeholder="Price"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>

                  <button
                    className="btn btn-primary d-block btn-user w-100"
                    type="submit"
                  >
                    {button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormProducts;
