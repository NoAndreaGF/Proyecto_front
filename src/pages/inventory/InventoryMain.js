import { useEffect, useState } from "react";
import {
  faPlus,
  faEdit,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import TableInventory from "../../components/tables/TableInventory";
import ButtonBig from "../../components/buttons/button-big";
import SearchBar from "../../components/search-bar/search-bar";

import { useNavigate } from "react-router-dom";

import InService from "../../services/InService";
import OutService from "../../services/OutService";

function InventoryMain() {
  const navigate = useNavigate();

  let index = 0;

  const [ins, setIns] = useState([]);
  const [outs, setOuts] = useState([]);
  const [insOuts, setInsOuts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    retriveIns();
    retriveOuts();
  }, []);

  useEffect(() => {
    sumInsOuts();
  }, [ins, outs]);

  const sumInsOuts = () => {
    const array = ins.concat(outs);
    array.sort((a, b) => {
      let da = new Date(a.createdAt),
      db = new Date(b.createdAt);
      return da - db;
    });
    setInsOuts(array);
  };

  const retriveIns = () => {
    InService.getAll()
      .then((response) => {
        setIns(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retriveOuts = () => {
    OutService.getAll()
      .then((response) => {
        setOuts(response.data);
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
      alert("No se a seleccionado ningun registro");
      return;
    }

    InService.remove(index)
      .then((response) => {
        alert(response.data);
        index = 0;
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleUpdate = () => {
    if (index === 0) {
      alert("No se a seleccionado ningun cliente");
      return;
    }

    InService.get(index)
      .then((response) => {
        const customer = response.data;
        navigate("/clientes/actualizar", {
          replace: true,
          state: { index, customer },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="row-pages col-xl">
      <div className="card shadow mb-4 col-xl-9 col-lg-7">
        <div className="card-body">
          <SearchBar />
          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-body">
                <TableInventory
                  inActive={index}
                  changeState={changeState}
                  dataset1={ins}
                  dataset2={outs}
                  dataset={insOuts}
                  show={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <ButtonBig icon={faPlus} link="/inventario/agregar" />
        <ButtonBig icon={faEdit} action={() => handleUpdate()} />
        <ButtonBig icon={faArrowRotateLeft} link="/inventario" />
      </div>
    </div>
  );
}

export default InventoryMain;
