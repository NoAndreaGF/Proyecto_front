import { useRef, useState, useEffect } from "react";
import "./LoginForm.css";
import useAuth from "../../hooks/useAuth";
import UserService from "../../services/UserService";
import { Link, useNavigate, useLocation } from "react-router-dom";

function LoginForm() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/index";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      username: user,
      password: pwd,
    };

    // Quita el errors del back para que entre al catch
    UserService.verify(data)
      .then((response) => {
        if (!response?.data?.errors) {
          setUser("");
          setPwd("");
          //console.log(response?.data);
          const token = response?.data;
          setAuth({ user, pwd, token });
          // Guardar el token en localstorage
          navigate(from, { replace: true });
        } else {
          setErrMsg("No se encontro el usuario o contraseña");
        }
      })
      .catch(() => {
        if (!errMsg?.response) {
          setErrMsg("Fallo en el Servidor");
        } else {
          setErrMsg("Inicio de sesión fallido");
        }
        errRef.current.focus();
      });
  };

  return (
    <div className="p-5">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Bienvenido de nuevo!</h1>
      </div>
      <form className="user" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-user"
            id="username"
            placeholder="Usuario"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-user"
            id="password"
            placeholder="Contraseña"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>
        <button className="btn btn-primary btn-user btn-block">
          Iniciar sesión
        </button>
        <hr />
      </form>

      <div className="text-center">
        <Link className="small" to="/register">
          ¡Registrate!
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
