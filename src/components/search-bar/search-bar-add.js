
function SearchBarAdd() {
    return (
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-0 my-5 my-md-3 pages-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-white border-1 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-plus fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
    );
}
