import RegisterForm from "../components/registerForm/RegisterForm";

function Register() {
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;