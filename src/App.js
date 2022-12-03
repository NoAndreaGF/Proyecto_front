import { Routes, Route } from "react-router-dom";

import "./bootstrap/css/sb-admin-2.css";

import Main from "./components/main/Main";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Layout from "./components/layout/Layout";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import SalesAdd from "./pages/Sales-add";
import SalesUpdate from "./pages/Sales-update";
import SalesAddProduct from "./pages/Sales-add-product";

function App() {
  return (
    <div className="App">
      <link
        href="https://use.fontawesome.com/releases/v5.0.1/css/all.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<RequireAuth />}>
            <Route element={<Static />}>
              <Route path="/index" element={<Dashboard />} />
              <Route path="/inventario" element={<Inventory />} />
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
