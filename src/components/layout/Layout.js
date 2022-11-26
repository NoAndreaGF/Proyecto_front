import Dashboard from "../dashboard/Dashboard";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

function Layout() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Dashboard />
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default Layout;
