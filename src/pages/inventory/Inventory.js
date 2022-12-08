import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { faArchive } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

import InService from "../../services/InService";
import OutService from "../../services/OutService";

function Inventory() {
  const [ins, setIns] = useState(0);
  const [outs, setOuts] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    retriveIns();
    retriveOuts();
  }, []);

  useEffect(() => {
    sumOutsIns();
  }, [ins, outs]);

  const retriveIns = () => {
    InService.getAll()
    .then(response => {
      setIns(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const retriveOuts = () => {
    OutService.getAll()
    .then(response => {
      setOuts(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const sumOutsIns = () => {
    setSum(ins + outs);
  };

  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Inventario"
        multiTitle="Entradas y Salidas"
        subtitle="Administra inventario"
        icon={faArchive}
        count={sum}
      />
      <Outlet />
    </div>
  );
}

export default Inventory;
