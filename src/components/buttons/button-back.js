import { Link } from "react-router-dom";

function ButtonBack({ link }) {
    return (
        <div className="col col-buttons">
            <div className="row mb-4">
                <div className="col-xl-12" >
                    <Link to={link}>
                        <button class="btn btn-transparent" type="button">
                            <i class="fas fa-reply fa-md"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ButtonBack;