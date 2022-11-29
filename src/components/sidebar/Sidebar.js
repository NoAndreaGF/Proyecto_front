import React, { useState } from "react";
import Brand from "../brand/Brand";
import Item from "../item/Item";
import {
  faHome,
  faArchive,
  faShoppingCart,
  faUsers,
  faBarcode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

function Sidebar() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/index";

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${menuCollapse ? "toggled" : "" } `}
      id="accordionSidebar"
    >
      <Brand />

      <Item name="Dashboard" icon={faHome}></Item><Link to="/index"/>
      <Item name="Inventario" icon={faArchive} /><Link to="/index"/>
      <Item name="Venta" icon={faShoppingCart} /><Link to="/index"/>
      <Item name="Clientes" icon={faUsers} /><Link to="/index"/>
      <Item name="Productos" icon={faBarcode} /><Link to="/index"/>
      <Item name="Usuario" icon={faUser} /><Link to="/index"/>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={menuIconClick}></button>
      </div>
    </ul>
  );
}

export default Sidebar;