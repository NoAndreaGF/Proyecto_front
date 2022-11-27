import React, { useState } from "react";

function Topbar() {

  const [dropMenu, setDropMenu] = useState(false);

  const dropMenuClick = () => {
    dropMenu ? setDropMenu(false) : setDropMenu(true);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className={`nav-item dropdown no-arrow ${dropMenu ? "show" : "" }`}>
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={dropMenu ? true : false }
            onClick={dropMenuClick}
          >
            <i className="fas fa-user fa-2x text-gray-300"></i>
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${dropMenu ? "show" : "" }`}
            aria-labelledby="userDropdown"
          >
            <a
              className="dropdown-item"
              data-toggle="modal"
              data-target="#logoutModal"
              href="/"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Cerrar sesión
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;