import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./RegisterForm.css";

import UserService from "../../services/UserService";

const USER_REGEX = /^[a-zA-Z0-9]{3,23}$$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function RegisterForm() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    console.log(user);

    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    console.log(pwd);
    console.log(matchPwd);

    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Datos Invalidos");
      return;
    }

    let data = {
      username: user,
      password: pwd,
    };

    UserService.create(data)
      .then((response) => {
        if (!response?.data?.errors) {
          //clear state and controlled inputs
          setUser("");
          setPwd("");
          setMatchPwd("");
        } else {
          setErrMsg("Registro fallido");
        }
      })
      .catch((e) => {
        if (!e?.response) {
          setErrMsg("Fallo en el Servidor");
        } else if (e.response?.status === 409) {
          setErrMsg("Usuario ocupado");
        } else {
          setErrMsg("Registro fallido");
        }
        errRef.current.focus();
      });
  };

  return (
    <div className="p-5">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
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
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 a 24 caracteres.
            <br />
            Debe iniciar con una letra.
            <br />
            Se permiten letras, números, guiones.
          </p>
        </div>
        <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <input
              type="password"
              className="form-control form-control-user"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Contraseña"
              value={pwd}
              required
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 a 24 caracteres.
              <br />
              Debe incluir mayusculas y minusculas, un número y un caracter
              especial
              <br />
              Caracteres permitidos:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control form-control-user"
              id="confirm_password"
              placeholder="Repita contraseña"
              required
              value={matchPwd}
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Debe coincidir con la contraseña.
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary btn-user btn-block"
          disabled={!validName || !validPwd || !validMatch ? true : false}
        >
          Registrarse
        </button>
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