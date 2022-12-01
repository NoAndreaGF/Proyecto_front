import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import FormSalesAdd from "../components/form-sales/form-sales-add";
import ButtonAdd from "../components/buttons/button-add";
import ButtonBack from "../components/buttons/button-back";
import SalesTitle from "../components/sales-title/sales-title";

function SalesAdd() {

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
                <FormSalesAdd />
                <div className="col">
                    <ButtonAdd />
                </div>
            </div>
        </div>
    );
}

export default SalesAdd;