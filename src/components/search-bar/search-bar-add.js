
function SearchBarAdd() {
    return (
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-0 my-5 my-md-3 pages-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-white border-1 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-plus fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
    );
}

export default SearchBarAdd;