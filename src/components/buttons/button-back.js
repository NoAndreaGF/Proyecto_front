import { Link } from "react-router-dom";

function ButtonBack({link}) {
    return (
        <div className="col col-buttons">
            <div className="row mb-4">
                <div className="col-xl-12" >
                    <button className="btn btn-transparent" type="button">
                        <Link to={link}><i className="fas fa-reply fa-md"></i></Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonBack;