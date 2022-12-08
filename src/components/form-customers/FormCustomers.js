import { useState, useEffect } from "react";

const NAME_REGEX = /^[a-zA-Z0-9\s]{3,30}/;
const LASTNAME_REGEX = /^[a-zA-Z0-9]{3,20}/;
const PHONE_REGEX = /^[0-9\b]{10}$/;
const ADDRESS_REGEX = /^[a-zA-Z0-9]{3,100}/;

function FormCustomersUpdate({
  title,
  button,
  handle,
  msg,
  index,
  nameCustomer,
  lastNameCustomer,
  phoneCustomer,
  addressCustomer,
}) {
  const [name, setName] = useState(nameCustomer);
  const [lastName, setLastName] = useState(lastNameCustomer);
  const [phone, setPhone] = useState(phoneCustomer);
  const [address, setAddress] = useState(addressCustomer);

  const [errMsg, setErrMsg] = useState(msg);

  useEffect(() => {
    setErrMsg(msg);
  }, [msg]);

  useEffect(() => {
    setName(nameCustomer);
    setLastName(lastNameCustomer);
    setPhone(phoneCustomer);
    setAddress(addressCustomer);
  }, [nameCustomer, lastNameCustomer, phoneCustomer, addressCustomer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = NAME_REGEX.test(name);
    const v2 = LASTNAME_REGEX.test(lastName);
    const v3 = PHONE_REGEX.test(phone);
    const v4 = ADDRESS_REGEX.test(address);

    if (!v1) {
      setErrMsg("Nombre Invalido");
      return;
    } else if (!v2) {
      setErrMsg("Apellido Invalido");
      return;
    } else if (!v3) {
      setErrMsg("Teléfono Invalido");
      return;
    } else if (!v4) {
      setErrMsg("Dirección Invalida");
      return;
    } else {
      setErrMsg("");
    }

    let data = {
      name: name,
      lastName: lastName,
      phone: phone,
      address: address,
    };

    handle(index, data);
  };

  return (
    <div className="card shadow-lg border-0 my-0">
      <div className="card-body p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">{title}</h4>
                  <p
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Nombre"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        placeholder="Apellido"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        placeholder="Teléfono"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control form-control-user"
                      type="text"
                      required
                      autoComplete="off"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      placeholder="Dirección"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <button
                    className="btn btn-primary d-block btn-user w-100"
                    type="submit"
                  >
                    {button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCustomersUpdate;
