import { Outlet } from "react-router-dom";

import { faUsers } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

function Clients() {
  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Clientes"
        subtitle="Administra los clientes"
        icon={faUsers}
      />
      <Outlet />
    </div>
  );
}

export default Clients;
