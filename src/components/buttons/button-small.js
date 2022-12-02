import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ButtonSmall({ icon, link }) {
    return (
        <div className="col">
            <div className="row">
                <div className="col" >
                    <Link to={link}>
                        <button class="btn btn-date btn-primary" type="button">
                            <FontAwesomeIcon icon={icon} className="fa-1x text-white" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ButtonSmall;