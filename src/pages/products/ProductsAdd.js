import { useEffect, useState } from "react";

import OrderService from "../../services/OrderService";
import TablePage from "../../components/table-pages/table-pages";
import ButtonBig from "../../components/buttons/button-big";
import { faPlus,faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";
import ButtonBack from "../../components/buttons/button-back";
import ProductsTitle from "../../components/products-title/products-title";
import FormProductsAdd from "../../components/form-products/form-products-add";

function ProductsAdd() {

    const [products, setProducts] = useState();

    useEffect(() => {
        retriveOredersProducts();
    }, []);

    const  retriveOredersProducts = () => {
        OrderService.getAll()
            .then(response => {
                setProducts(response.data.length);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="container-fluid">

            <div className="form-row">
                <ButtonBack />
            </div>

            <div className="row-pages col-xl">
                <FormProductsAdd/>
                <div className="col">
                    <ButtonBig icon={faPlus} />
                </div>
            </div>
        </div>
    );
}

export default ProductsAdd;