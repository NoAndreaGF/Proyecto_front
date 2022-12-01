

function ButtonsPage({}) {
    return (
        <div className="col col-buttons">
            <div className="row mb-4">
                <div className="col-xl-12" >
                    <button class="btn btn-pages btn-primary" type="button">
                        <i class="fas fa-plus fa-md"></i>
                       
                    </button>
                </div>
            </div>

            <div className="row  mb-4">
                <div className="col-xl-12" >
                    <button class="btn btn-pages btn-primary" type="button">
                        <i class="fas fa-edit fa-md"></i>
                    </button>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-xl-12" >
                    <button class="btn btn-pages btn-primary" type="button">
                        <i class="fas fa-trash fa-md"></i>
                    </button>
                </div>
            </div>

        </div>



    );
}

export default ButtonsPage;