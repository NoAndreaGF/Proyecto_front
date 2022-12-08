import { useEffect, useState } from "react";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../../components/search-bar/search-bar";
import TableCustomers from "../../components/tables/TableCustomers";
import ButtonBig from "../../components/buttons/button-big";

import { useNavigate } from "react-router-dom";

import CustomerService from "../../services/CustomerService";

function ClientsMain() {
  const navigate = useNavigate();

  let index = 0;

  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    retriveCustomers();
  }, []);

  const retriveCustomers = () => {
    CustomerService.getAll()
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeState = (e) => {
    index = e;
  };

  const handleDelete = () => {
    if (index === 0) {
      alert("No se a seleccionado ningun cliente");
      return;
    }

    CustomerService.remove(index)
    .then((response) => {
      alert(response.data);
      index = 0;
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  };

  const handleSearch = (data) => {
    CustomerService.search(data).then((response) => {
      if(data != "") {
        setCustomers(response.data)
      } else {
        retriveCustomers();
      }
      setSearch("");
    });
  }

  const onChange = (e) => {
     setSearch(e.target.value)
  }


  const handleUpdate = () => {
    if (index === 0) {
      alert("No se a seleccionado ningun cliente");
      return;
    }
    
    CustomerService.get(index)
    .then((response) => {
      const customer = response.data;
      navigate("/clientes/actualizar", { replace: true, state:{index, customer} });
    })
    .catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="row-pages col-xl">
      <div className="card shadow mb-4 col-xl-9 col-lg-7">
        <div className="card-body">
          <SearchBar 
          searchIndex = {search}
          findByIndex = {handleSearch}
          onChange = {onChange}/>
          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-body">
                <TableCustomers
                  inActive={index}
                  changeState={changeState}
                  dataset={customers}
                  show={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <ButtonBig icon={faPlus} link="/clientes/agregar" />
        <ButtonBig icon={faEdit} action={() => handleUpdate()} />
        <ButtonBig icon={faTrash} action={() => handleDelete()} />
      </div>
    </div>
  );
}

export default ClientsMain;
