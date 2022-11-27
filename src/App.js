import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./bootstrap/css/sb-admin-2.css";
import Layout from "./components/layout/Layout";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Layout />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
