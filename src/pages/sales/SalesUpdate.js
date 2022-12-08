import { useEffect, useState } from "react";

import OrderService from "../../services/OrderService";
import FormSalesUpdate from "../../components/form-sales/form-sales-update";
import ButtonBack from "../../components/buttons/button-back";
import ButtonBig from "../../components/buttons/button-big";
import {faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";

function SalesUpdate() {

    const [sales, setSales] = useState();

    useEffect(() => {
        retriveOredersSales();
    }, []);

    const retriveOredersSales = () => {
        OrderService.getAll()
            .then(response => {
                setSales(response.data.length);
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
                <FormSalesUpdate />
                <div className="col">
                    <ButtonBig icon={faEdit} />
                    <ButtonBig icon={faTrash} />
                </div>
            </div>
        </div>
    );
}

export default SalesUpdate;