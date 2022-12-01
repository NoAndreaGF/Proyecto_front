import ButtonAddProducts from "../buttons/button-add-products";
import SearchBarAdd from "../search-bar/search-bar-add";
import Table from "../table/Table";

function FormSalesAdd() {
    return (
        <div class="card shadow mb-4 col-xl-9 col-lg-7">
            <div className="card-body">
                <div className="col-xl-12 col-lg-7">
                    <p className="mt-4 mb-4 text-pages">Agrega la información de la venta</p>
                    <SearchBarAdd />

                    <div className="row col-xl-6 col-lg-2">
                        <input type="text" readonly="readonly" class="form-control bg-white border-1 small" placeholder="Cliente" aria-label="Search" aria-describedby="basic-addon2" />
                    </div>

                    <div className="row mb-4">
                        <div class="card shadow mt-4 col-xl-10 col-lg-8">
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
                            <ButtonAddProducts />
                            <h3 className="ml-3 mt-3">Total</h3>
                            <h5 className="ml-4 mt-1">$150</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSalesAdd;