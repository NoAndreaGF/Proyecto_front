import { faPlus, faEdit, faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

import TablePage from "../../components/table-pages/table-pages";
import ButtonBig from "../../components/buttons/button-big";

function InventoryMain() {
  return (
    <div className="row-pages col-xl">
      <TablePage />
      <div className="col">
        <ButtonBig icon={faPlus} link="/inventario/agregar" />
        <ButtonBig icon={faEdit} link="/inventario/actualizar" />
        <ButtonBig icon={faArrowRotateLeft} link="/inventario" />
      </div>
    </div>
  );
}

export default InventoryMain;
