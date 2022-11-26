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

      <Item name="Dashboard" icon={faHome} />
      <Item name="Inventario" icon={faArchive} />
      <Item name="Venta" icon={faShoppingCart} />
      <Item name="Clientes" icon={faUsers} />
      <Item name="Productos" icon={faBarcode} />
      <Item name="Usuario" icon={faUser} />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={menuIconClick}></button>
      </div>
    </ul>
  );
}

export default Sidebar;
