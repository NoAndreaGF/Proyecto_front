
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import ButtonAddProducts from "../buttons/button-add-products";
import ButtonSmall from "../buttons/button-small";


function FormSalesUpdate() {
    return (
        <div className="card shadow mb-4 col-xl-9 col-lg-7">
            <div className="card-body">
                <div className="col-xl-12 col-lg-7">
                    <p className="mt-4 mb-4 text-pages">Agrega la información de la venta</p>

                    <div className="row mb-3">
                        <div className="row col-xl-1 col-lg-2 mr-2">
                            <input type="text" readOnly="readonly" className="form-control bg-white border-1 small" placeholder="ID" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <div className="row col-xl-6 col-lg-2">
                            <input type="text" readOnly="readonly" className="form-control bg-white border-1 small" placeholder="Cliente" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="row col-xl-5 col-lg-2 mr-2">
                            <input type="text" readOnly="readonly" className="form-control bg-white border-1 small" placeholder="Fecha de entrega" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <ButtonSmall icon={faCalendar}  />

                        <div className="row col-xl-4 col-lg-2 mr-5">
                            <select type="text" readOnly="readonly" className="form-control bg-white border-1 small">
                                <option>Pendiente</option>
                                <option>En progreso</option>
                                <option>Entregado</option>
                            </select>
                        </div>

                    </div>

                    <div className="row mb-4">
                        <div className="card shadow mt-4 col-xl-10 col-lg-8">
                            <div className="card-body">
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col ml-4">
                            <ButtonAddProducts link="/ventas/actualizar" />
                            <h3 className="ml-3 mt-3">Total</h3>
                            <h5 className="ml-4 mt-1">$150</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSalesUpdate;