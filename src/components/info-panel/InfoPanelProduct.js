
import TableLastProduct from "../tables/TableLastProducts";

import useSortData from "../../hooks/useSortData";

function InfoPanelProduct({ columns, title, data, show }) {
  const datasort = useSortData(data);
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
          <div className="dropdown no-arrow"></div>
        </div>
        <div className="card-body">
          <TableLastProduct columns={columns} dataset={datasort} show={show} />
        </div>
      </div>
    </div>
  );
}

export default InfoPanelProduct;
