import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function FormUserUpdate() {

    return (
        <div className="card shadow mb-4 col-xl-4 col-lg-7">
            <div className="card-body">
                <div className="col-xl-12 col-lg-7">

                    <div className="row mb-4 mt-3">
                        <div className="col-xl-12 mt-2 ml-7">
                            <FontAwesomeIcon icon={faUser} className="fa-6x text-black ml-6" />
                        </div>

                        <div className="row mb-4 mt-3 ml-7">
                            <h3 className="m-0 font-weight-bold text-black">Bienvenido, Usuario!</h3>
                        </div>

                        <div className="row col-xl-7 mb-2 mt-3 ml-7">
                            <input type="text" className="form-control bg-white border-1 small" placeholder="Usuario" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <div className="row col-xl-7 mb-2 mt-3 ml-7">
                            <input type="text" className="form-control bg-white border-1 small" placeholder="Contraseña" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <div className="row col-xl-7 mb-4 mt-3 ml-7">
                            <button className="btn btn-user btn-primary" type="button">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormUserUpdate;