import { useEffect, useState, useMemo } from "react";

import { Outlet } from "react-router-dom";

import { faUsers } from "@fortawesome/free-solid-svg-icons";
import PrimaryTitle from "../../components/primary-title/PrimaryTitle";

import CustomerService from "../../services/CustomerService";

function Customers() {
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    retriveCustomers();
  }, []);

  const retriveCustomers = () => {
    CustomerService.getAll()
    .then(response => {
      setCustomers(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <div className="container-fluid">
      <PrimaryTitle
        title="Clientes"
        subtitle="Administra los clientes"
        icon={faUsers}
        count={customers}
      />
      <Outlet />
    </div>
  );
}

export default Customers;
