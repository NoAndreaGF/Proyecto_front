import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ButtonBig({ icon, link }) {
  return (
    <div className="col col-buttons">
      <div className="row  mb-4">
        <div className="col-xl-12">
          <Link to={link}>
            <button className="btn btn-pages btn-primary" type="button">
              <FontAwesomeIcon icon={icon} className="fa-2x text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ButtonBig;
