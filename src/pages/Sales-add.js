import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import FormSalesAdd from "../components/form-sales/form-sales-add";
import ButtonBig from "../components/buttons/button-big";
import { faPlus,faCalendar } from "@fortawesome/free-solid-svg-icons";
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
                    <ButtonBig icon={faPlus} />
                </div>
            </div>
        </div>
    );
}

export default SalesAdd;