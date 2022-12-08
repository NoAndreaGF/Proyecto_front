import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import TableProducts from "../../components/tables/TableProducts";

import ProductService from "../../services/ProductService";
import TableInventory from "../tables/TableInventory";

const NAME_REGEX = /^[a-zA-Z0-9\s]{3,30}/;
const QUANTITY_REGEX = /^[1-9\d]/;

function FormInventory({
  title,
  handle,
  msg,
  index,
  nameProduct,
  quantityProduct,
}) {
  const [id, setId] = useState(0);
  const [name, setName] = useState(nameProduct);
  const [quantity, setQuantity] = useState(quantityProduct);
  const [products, setProducts] = useState([]);

  const [errMsg, setErrMsg] = useState("");

  let indexTable = 0;

  const bigArray = [
    {
      idIn: 30,
      date: "2022-06-10",
      product: { name: "premium" },
      quantity: 20,
    },
    {
      idIn: 12,
      date: "2022-07-12",
      product: { name: "High" },
      quantity: 10,
    },
  ];

  useEffect(() => {
    retriveProducts();
  }, []);

  useEffect(() => {
    setErrMsg(msg);
  }, [msg]);

  useEffect(() => {
    setName(nameProduct);
    setQuantity(quantityProduct);
  }, [nameProduct, quantityProduct]);

  const retriveProducts = () => {
    ProductService.getAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeState = (e) => {
    if (e != 0) {
      indexTable = e.idProduct;
      setName(e.name);
      setId(e.idProduct);
    } else {
      indexTable = 0;
      setName("");
      setId(0);
    }
    console.log(products);
    console.log("bigData " + bigArray.id);
  };

  const handleSave = () => {
    const v1 = NAME_REGEX.test(name);
    const v2 = QUANTITY_REGEX.test(quantity);
    if (!v1 || name === undefined) {
      setErrMsg("Producto Invalido");
      return;
    } else if (!v2 || quantity === 0) {
      setErrMsg("Cantidad Invalida");
      setQuantity("");
      return;
    } else {
      setErrMsg("");
    }
    const data = {
      idIn: 3,
      date: "2022-06-10",
      product: { name: "premium" },
      quantity: 20,
    };

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="card shadow-lg border-0 my-0">
        <div className="card-body p-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="p-1">
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
                      <div className="col-md-2">
                        <select className="form-control form-control-user animated--grow-in h-100 p-3">
                          <option className="dropdown-item" value="Entrada">
                            Entrada
                          </option>
                          <option className="dropdown-item" value="Salida">
                            Salida
                          </option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <input
                          className="form-control form-control-user"
                          type="text"
                          readOnly="readOnly"
                          required
                          autoComplete="off"
                          onChange={(e) => setId(e.target.value)}
                          value={id || ""}
                          placeholder="ID"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          className="form-control form-control-user"
                          type="text"
                          readOnly="readOnly"
                          required
                          autoComplete="off"
                          onChange={(e) => setName(e.target.value)}
                          value={name || ""}
                          placeholder="Nombre"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          className="form-control form-control-user"
                          type="number"
                          required
                          autoComplete="off"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity || ""}
                          placeholder="Quantity"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          className="btn btn-primary d-block btn-user w-100 p-2"
                          type="button"
                          onClick={handleSave}
                        >
                          <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="fa-2x text-white"
                          />
                        </button>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary d-block btn-user w-100 p-2"
                      type="submit"
                    >
                      Guardar Registros
                    </button>
                  </form>
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-md-12 col-xl-6 p-1">
                        <h2>Inventario</h2>
                        <div className="card shadow mb-4">
                          <div className="card-body">
                            <TableProducts
                              inActive={indexTable}
                              changeState={changeState}
                              dataset={products}
                              show={4}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-6 p-1">
                        <h2>Nuevos registro</h2>
                        <div className="card shadow mb-4">
                          <div className="card-body">
                            <TableInventory
                              inActive={indexTable}
                              changeState={changeState}
                              dataset={bigArray}
                              show={4}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInventory;
