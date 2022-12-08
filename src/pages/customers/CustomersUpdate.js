import { useState } from "react";
import { useLocation } from "react-router-dom";

import ButtonBack from "../../components/buttons/button-back";
import FormCustomers from "../../components/form-customers/FormCustomers";

import CustomerService from "../../services/CustomerService";

function CustomersUpdate() {
  const [errMsg, setErrMsg] = useState("");
  const { state } = useLocation();

  const index = state.index;
  let name = state.customer.name;
  let lastName = state.customer.lastName;
  let phone = state.customer.phone;
  let address = state.customer.address;

  const handle = (index, data) => {
    CustomerService.update(index, data)
      .then((response) => {
        if (!response?.data?.errors) {
          if (response.data !== "406") {
            setErrMsg("");
            alert(response.data);
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
        title="Actualizar cliente"
        button="Actualizar"
        handle={handle}
        msg={errMsg}
        index={index}
        nameCustomer={name}
        lastNameCustomer={lastName}
        phoneCustomer={phone}
        addressCustomer={address}
      />
    </div>
  );
}

export default CustomersUpdate;
