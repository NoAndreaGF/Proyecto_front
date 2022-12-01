function SearchBar() {
    return (
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-1 my-md-4 pages-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-white border-1 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
    );
}

export default SearchBar;