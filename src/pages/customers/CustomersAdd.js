import { useState } from "react";

import CustomerService from "../../services/CustomerService";

import ButtonBack from "../../components/buttons/button-back";
import FormCustomers from "../../components/form-customers/FormCustomers";

function CustomersAdd() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handle = (index, data) => {
    CustomerService.create(data)
      .then((response) => {
        if (!response?.data?.errors) {
          if (response.data !== "406") {
            setName("");
            setLastName("");
            setPhone("");
            setAddress("");
            setErrMsg("");
            window.location.reload();
          } else if (response.data === "406") {
            setErrMsg("Cliente existente.");
          }
        } else {
          setErrMsg("Registro fallido");
        }
      })
      .catch((e) => {
        if (!e?.response) {
          setErrMsg("Fallo en el Servidor");
        } else {
          setErrMsg("Registro fallido");
        }
      });
  };

  return (
    <div className="container p-0">
      <div className="form-row">
        <ButtonBack link="/clientes" />
      </div>
      <FormCustomers
        title="Agregar cliente"
        button="Registrar"
        handle={handle}
        msg={errMsg}
        nameCustomer={name}
        lastNameCustomer={lastName}
        phoneCustomer={phone}
        addressCustomer={address}
      />
    </div>
  );
}

export default CustomersAdd;
