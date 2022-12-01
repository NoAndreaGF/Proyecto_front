import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ButtonBig({icon,link}) {
    return (
        <div className="col col-buttons">
            <div className="row  mb-4">
                <div className="col-xl-12" >
                    <button class="btn btn-pages btn-primary" type="button">
                    <FontAwesomeIcon icon={icon} className="fa-2x text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonBig;