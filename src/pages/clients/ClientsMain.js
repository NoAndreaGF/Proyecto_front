import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import TablePage from "../../components/table-pages/table-pages";
import ButtonBig from "../../components/buttons/button-big";

function ClientsMain() {
  return (
    <div className="row-pages col-xl">
      <TablePage />
      <div className="col">
        <ButtonBig icon={faPlus} link="/clientes/agregar" />
        <ButtonBig icon={faEdit} link="/clientes/actualizar" />
        <ButtonBig icon={faTrash} link="/clientes" />
      </div>
    </div>
  );
}

export default ClientsMain;
