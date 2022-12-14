import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

function Static() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Static;
