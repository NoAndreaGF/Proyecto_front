import { Outlet } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../components/primary-title/PrimaryTitle";

function User() {
  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Usuario"
        subtitle="Administra usuario"
        icon={faUser}
      />
      <Outlet />
    </div>
  );
}

export default User;
