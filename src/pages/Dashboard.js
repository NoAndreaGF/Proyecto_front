import DashboardPanel from "../components/dashboard-panel/DashboardPanel";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { auth } = useAuth();

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <DashboardPanel />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
