import { Link } from "react-router-dom";

function ButtonAddProducts({link}) {
    return (
        <div className="col">
            <div className="row">
                <div className="col mt-4" >
                    <button className="btn btn-add-product btn-primary" type="button">
                        <Link to={link} ><i className="fas fa-shopping-cart fa-md"></i></Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
