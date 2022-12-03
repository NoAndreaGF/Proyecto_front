import TablePage from "../table-pages/table-pages";
import ButtonBig from "../buttons/button-big";

import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../primary-title/PrimaryTitle";

function PrimaryContent({ title, subtitle, icon, count, data }) {
  return (
    <div className="container-fluid">
      <PrimaryTitle title={title} subtitle={subtitle} icon={icon} count={count} />

      <div className="row-pages col-xl">
        <TablePage data={data} />
        <div className="col">
          <ButtonBig icon={faPlus} link="/ventas/agregar" />
          <ButtonBig icon={faEdit} link="/ventas/actualizar" />
          <ButtonBig icon={faTrash} link="/ventas" />
        </div>
      </div>
    </div>
  );
}

export default PrimaryContent;