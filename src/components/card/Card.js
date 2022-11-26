import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Card({title, cuantity, icon, colorBorder, colorText}) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card  ${colorBorder} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold ${colorText} text-uppercase mb-1`}>
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {cuantity}
              </div>
            </div>
            <div className="col-auto">
              <FontAwesomeIcon icon={icon} className="fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
