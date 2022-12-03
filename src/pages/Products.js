import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import TablePage from "../components/table-pages/table-pages";
import ProductsTitle from "../components/products-title/products-title";
import ButtonBig from "../components/buttons/button-big";
import { faPlus,faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";

function Products() {

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

            <ProductsTitle data={products}/>

            <div className="row-pages col-xl">
                <TablePage/>
                <div className="col">
                    <ButtonBig icon={faPlus}  />
                    <ButtonBig icon={faEdit}  />
                    <ButtonBig icon={faTrash}  />
                </div>
            </div>
        </div>
    );
}

export default Products;