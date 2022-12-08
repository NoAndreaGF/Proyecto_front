function SearchBar({ searchIndex, onChange, findByIndex }) {
  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-1 my-md-4 pages-search">
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-white border-1 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchIndex}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={findByIndex} >
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;