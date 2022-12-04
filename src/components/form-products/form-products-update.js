function FormProductsUpdate() {
    return (
        <div class="card shadow mb-4 col-xl-9 col-lg-7">
            <div className="card-body">
                <div className="col-xl-12 col-lg-7">
                    <p className="mt-4 mb-4 text-pages">Agrega la información del producto</p>

                    <div className="row mb-3">
                        <div className="row col-xl-1 col-lg-2 mr-2">
                            <input type="text" readOnly="readonly" className="form-control bg-white border-1 small" placeholder="ID" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <div className="row col-xl-4 col-lg-2">
                            <input type="text" className="form-control bg-white border-1 small" placeholder="Nombre" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <div className="row col-xl-4 col-lg-2 ml-2">
                            <input type="text" className="form-control bg-white border-1 small" placeholder="Proveedor" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="row col-xl-6 col-lg-2 mr-2">
                            <textarea type="text" class="form-control bg-white border-1 small" placeholder="Descripcion" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </div>

                    <div className="row">

                        <div className="row col-xl-3 col-lg-2">
                            <input type="number" className="form-control bg-white border-1 small" min="0" />
                        </div>

                        <div className="row col-xl-3 col-lg-2 ml-2">
                            <input type="text" className="form-control bg-white border-1 small" value="$10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormProductsUpdate;