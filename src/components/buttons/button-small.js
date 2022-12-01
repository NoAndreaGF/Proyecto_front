import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ButtonSmall({icon,link}) {
    return (
        <div className="col">
            <div className="row">
                <div className="col" >
                    <button class="btn btn-date btn-primary" type="button">
                    <FontAwesomeIcon icon={icon} className="fa-1x text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonSmall;