import { Link } from "react-router-dom";

function ButtonAddProducts({link}) {
    return (
        <div className="col">
            <div className="row">
                <div className="col mt-4" >
                    <Link to={link}>
                    <button class="btn btn-add-product btn-primary" type="button">
                        <i class="fas fa-shopping-cart fa-md"></i>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ButtonAddProducts;