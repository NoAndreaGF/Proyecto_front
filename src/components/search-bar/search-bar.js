
import { useState, useEffect } from "react";

function SearchBar({searchIndex, onChange, findByIndex, placeholder}) {
  const [search, setSearch] = useState(searchIndex);

  useEffect(() => {
    setSearch(searchIndex);
  }, [
    searchIndex,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    findByIndex(search);
  };


  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-1 my-md-4 pages-search">
      <div className="input-group">
        <input
          id="searchText"
          type="text"
          className="form-control bg-white border-1 small"
          placeholder={placeholder}
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={search}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleSubmit} >
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;