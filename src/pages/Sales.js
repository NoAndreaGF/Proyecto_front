import { useEffect, useState } from "react";

import OrderService from "../services/OrderService";
import TablePage from "../components/table-pages/table-pages";
import ButtonAdd from "../components/buttons/button-add";
import ButtonModify from "../components/buttons/button-modify";
import ButtonDelete from "../components/buttons/button-delete";
import SalesTitle from "../components/sales-title/sales-title";

function Sales() {

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

            <SalesTitle data={sales}/>

            <div className="row-pages col-xl">
                <TablePage/>
                <div className="col">
                    <ButtonAdd />
                    <ButtonModify />
                    <ButtonDelete />
                </div>
            </div>
        </div>
    );
}

export default Sales;