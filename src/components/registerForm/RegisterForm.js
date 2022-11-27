function RegisterForm() {
  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
      </div>
      <form className="user">
        <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <input
              type="text"
              className="form-control form-control-user"
              id="exampleFirstName"
              placeholder="Nombre"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control form-control-user"
              id="exampleLastName"
              placeholder="Apellido"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="Usuario"
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <input
              type="password"
              className="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Contraseña"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control form-control-user"
              id="exampleRepeatPassword"
              placeholder="Repita contraseña"
            />
          </div>
        </div>
        <a href="login.html" className="btn btn-primary btn-user btn-block">
          Registrarse
        </a>
      </form>
      <hr />
      <div className="text-center">
        <a className="small" href="login.html">
          ¿Ya tienes una cuenta? Inicia sesión!
        </a>
      </div>
    </div>
  );
}

export default RegisterForm;