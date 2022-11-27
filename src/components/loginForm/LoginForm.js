function LoginForm() {
  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Bienvenido de nuevo!</h1>
      </div>
      <form className="user">
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-user"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Usuario"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-user"
            id="InputPassword"
            placeholder="Contraseña"
          />
        </div>
        <a href="index.html" className="btn btn-primary btn-user btn-block">
          Iniciar sesión
        </a>
        <hr />
      </form>

      <div className="text-center">
        <a className="small" href="register.html">
          Registrate!
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
