import TableSalesScrap from "../scrap/TableSalesScrap";
import SearchBar from "../search-bar/search-bar";

function TablePage({ data }) {
  return (
    <div className="card shadow mb-4 col-xl-9 col-lg-7">
      <div className="card-body">
        <SearchBar />
        <div className="col-xl-12 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-body">
              <TableSalesScrap data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
