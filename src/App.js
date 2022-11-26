import Layout from "./components/layout/Layout";
import "./bootstrap/css/sb-admin-2.css";
import "@fortawesome/react-fontawesome";

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
      <Layout />

    </div>
  );
}

export default App;
