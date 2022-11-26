import { FormContent } from "../form-content/form-content.js";

function Register() {
    return (
        <div>
            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
            </div>
            <form class="user">
                <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                            placeholder="Nombre" />
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                            placeholder="Apellido" />
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                        placeholder="Usuario" />
                </div>
                <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" class="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Contraseña" />
                    </div>
                    <div class="col-sm-6">
                        <input type="password" class="form-control form-control-user"
                            id="exampleRepeatPassword" placeholder="Repita contraseña" />
                    </div>
                </div>
                <a href="login.html" class="btn btn-primary btn-user btn-block">
                    Registrarse
                </a>

            </form>
            <hr />
            <div class="text-center">
                <a class="small" href="login.html">¿Ya tienes una cuenta? Inicia sesión!</a>
            </div>
        </div>
    );
}


export default Register;