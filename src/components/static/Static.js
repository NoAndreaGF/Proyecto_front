import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

function Layout(props) {
  return (
    <div className="App">
      <Outlet />
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <main>{props.children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
