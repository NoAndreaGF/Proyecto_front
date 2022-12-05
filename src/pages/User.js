import { Outlet } from "react-router-dom";
import TitlePages from "../components/title-pages/TitlePages";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../components/primary-title/PrimaryTitle";
import FormUserUpdate from "../components/form-user/form-user";

function User() {
  return (
    <div className="container-fluid">
      <TitlePages
      title="Usuario"
      description="Actualiza tu usuario"
      />

      <FormUserUpdate usuario="usuario1"/>
      <Outlet />
    </div>
  );
}

export default User;
