import { useEffect, useState } from "react";

import OrderService from "../../services/OrderService";

import ButtonBig from "../../components/buttons/button-big";
import TableSales from "../../components/tables/TableSales";
import SearchBar from "../../components/search-bar/search-bar";

import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function SalesMain() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    retriveOredersSales();
  }, []);

  const retriveOredersSales = () => {
    OrderService.getAll()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSearch = (data) => {
    OrderService.search(data).then((response) => {
      if(data !== "") {
        setOrders(response.data)
      } else {
        retriveOredersSales();
      }
      setSearch("");
    });
  }

  const onChange = (e) => {
     setSearch(e.target.value)
  }


  return (
    <div className="row-pages col-xl">
      <div className="card shadow mb-4 col-xl-9 col-lg-7">
        <div className="card-body">
          <SearchBar
           searchIndex = {search}
           findByIndex = {handleSearch}
           onChange = {onChange}
           placeholder = {"Buscar (ID, Estatus, Fecha: Ej. YYYY-MM-DD)..."}
          />
          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-body">
                <TableSales
                  dataset={orders}
                  show={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <ButtonBig icon={faPlus} link="/ventas/agregar" />
        <ButtonBig icon={faEdit} link="/ventas/actualizar" />
        <ButtonBig icon={faTrash} link="/ventas" />
      </div>
    </div>
  );
}

export default SalesMain;
