import {
  faPlus,
  faEdit,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import TablePage from "../../components/table-pages/table-pages";
import ButtonBig from "../../components/buttons/button-big";
import ButtonBack from "../../components/buttons/button-back";

function InventoryMain() {
  return (
    <>
      <div className="form-row">
        <ButtonBack link="/inventario" />
      </div>
      <div className="row-pages col-xl">
        <TablePage />
        <div className="col">
          <ButtonBig icon={faPlus} link="/clientes/agregar" />
          <ButtonBig icon={faArrowRotateLeft} link="/inventario" />
        </div>
      </div>
    </>
  );
}

export default InventoryMain;
