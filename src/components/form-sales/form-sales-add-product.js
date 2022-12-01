
import ButtonProduct from "../buttons/button-product";
import SearchBar from "../search-bar/search-bar";


function FormSalesAddProduct() {
    return (
        <div class="card shadow mb-4 col-xl-12 col-lg-7">
            <div className="card-body">
                <div className="col-xl-12 col-lg-7">
                    <p className="mt-4 mb-1 text-pages">Agrega los productos a la venta</p>

                    <div className="row">
                        <div className="row col-xl-6 col-lg-2">
                            <SearchBar />
                        </div>

                        <div className="col ml-5">
                            <div class="card shadow mt-4 col-xl-12 col-lg-8">
                                <div className="card-body">
                                    <div className="col-xl-12 col-lg-7">
                                        <div className="card shadow">
                                            <div className="card-body">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mb-3 ml-1">
                        <div className="row col-xl-1 col-lg-2 mr-2">
                            <input type="text" readonly="readonly" className="form-control bg-white border-1 small" placeholder="ID" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <div className="row col-xl-5 col-lg-2">
                            <input type="text" readonly="readonly" className="form-control bg-white border-1 small" placeholder="Nombre del producto" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </div>

                    <div className="row mb-3 ml-1">
                        <div className="row col-xl-4 col-lg-2 mr-2">
                            <input type="text" readonly="readonly" className="form-control bg-white border-1 small" placeholder="Cantidad" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <ButtonProduct />
                    </div>

                    <div className="row mb-4">
                        <div class="card shadow mt-4 col-xl-6 col-lg-8">
                            <div className="card-body">
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow">
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSalesAddProduct;