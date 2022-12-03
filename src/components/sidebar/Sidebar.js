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

function Sidebar() {

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
      
      <Item name="Dashboard" icon={faHome} link="/index" />
      <Item name="Inventario" icon={faArchive} link="/inventario" />
      <Item name="Venta" icon={faShoppingCart} link="/ventas" />
      <Item name="Clientes" icon={faUsers} link="/clientes" />
      <Item name="Productos" icon={faBarcode} link="/productos" />
      <Item name="Usuario" icon={faUser} link="/usuario" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={menuIconClick}></button>
      </div>
    </ul>
  );
}

export default Sidebar;