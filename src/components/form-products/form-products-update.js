function FormProductsUpdate() {
    return (
        <div class="card shadow mb-4 col-xl-9 col-lg-7">
            <div className="card-body">
                <div className="col-xl-12 col-lg-7">
                    <p className="mt-4 mb-4 text-pages">Actualiza la información del producto</p>

                    <div className="row col-xl-6 col-lg-2">
                        <input type="text" readonly="readonly"  placeholder="8" aria-disabled="true"/>
                        <input type="text" readonly="readonly" class="form-control bg-white border-1 small" placeholder="Champiñones" aria-label="Search" aria-describedby="basic-addon2" />
                        <input type="text" readonly="readonly" class="form-control bg-white border-1 small" placeholder="Ava Procesados" aria-label="Search" aria-describedby="basic-addon2" />
                        <input type="text" readonly="readonly" class="form-control bg-white border-1 small" placeholder="Champiñones en lata de 25 gr." aria-label="Search" aria-describedby="basic-addon2" />
                        <input type="number"/>
                        <input type="text" value="$10"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormProductsUpdate;