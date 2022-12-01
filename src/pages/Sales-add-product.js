import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import FormSalesAddProduct from "../components/form-sales/form-sales-add-product";
import ButtonBack from "../components/buttons/button-back";
import SalesTitle from "../components/sales-title/sales-title";
import ButtonModify from "../components/buttons/button-modify";
import ButtonDelete from "../components/buttons/button-delete";

function SalesAddProduct() {

    return (
        <div className="container-fluid">
                   
            <div className="form-row">
                <ButtonBack />
            </div>

            <div className="row-pages col-xl">
                <FormSalesAddProduct />
            </div>
        </div>
    );
}

export default SalesAddProduct;