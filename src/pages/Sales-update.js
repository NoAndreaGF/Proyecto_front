import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import FormSalesUpdate from "../components/form-sales/form-sales-update";
import ButtonBack from "../components/buttons/button-back";
import SalesTitle from "../components/sales-title/sales-title";
import ButtonModify from "../components/buttons/button-modify";
import ButtonDelete from "../components/buttons/button-delete";

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
            <SalesTitle data={sales} />
            
            <div className="form-row">
                <ButtonBack />
            </div>

            <div className="row-pages col-xl">
                <FormSalesUpdate />
                <div className="col">
                    <ButtonModify/>
                    <ButtonDelete />
                </div>
            </div>
        </div>
    );
}

export default SalesUpdate;