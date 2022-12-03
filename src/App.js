import { Routes, Route } from "react-router-dom";

import "./bootstrap/css/sb-admin-2.css";

import Main from "./components/main/Main";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Layout from "./components/layout/Layout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Inventory from "./pages/inventory/Inventory";
import InventoryMain from "./pages/inventory/InventoryMain";
import InventoryAdd from "./pages/inventory/InventoryAdd";

import Sales from "./pages/sales/Sales";
import SalesUpdate from "./pages/sales/SalesUpdate";
import SalesAddProduct from "./pages/sales/SalesAddProduct";
import SalesMain from "./pages/sales/SalesMain";
import SalesAdd from "./pages/sales/SalesAdd";

import Clients from "./pages/clients/Clients";
import ClientsMain from "./pages/clients/ClientsMain";
import ClientsAdd from "./pages/clients/ClientsAdd";

import Products from "./pages/products/Products";
import ProductsMain from "./pages/products/ProductsMain";
import ProductsAdd from "./pages/products/ProductsAdd";

import User from "./pages/User";

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

          <Route element={<Layout />}>
            <Route path="/index" element={<Dashboard />} />
            <Route element={<Inventory />}>
              <Route path="/inventario" element={<InventoryMain />} />
              <Route path="/inventario-add" element={<InventoryAdd />} />
            </Route>
            <Route element={<Sales />}>
              <Route path="/ventas" element={<SalesMain />} />
              <Route path="/ventas-add" element={<SalesAdd />} />
            </Route>
            <Route element={<Clients />}>
              <Route path="/clientes" element={<ClientsMain />} />
              <Route path="/clientes-add" element={<ClientsAdd />} />
            </Route>
            <Route element={<Products />}>
              <Route path="/productos" element={<ProductsMain />} />
              <Route path="/productos-add" element={<ProductsAdd />} />
            </Route>
            <Route path="/usuario" element={<User />} />
          </Route>
          <Route element={<RequireAuth />}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
