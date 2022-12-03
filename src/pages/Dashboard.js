import { useEffect, useState } from "react";

import Card from "../components/card/Card";
import InfoPanel from "../components/info-panel/InfoPanel";
import InfoPanelScrap from "../components/scrap/InfoPanelScrap";

import {
  faDollarSign,
  faSignal,
  faClipboardList,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import OrderService from "../services/OrderService";
import InService from "../services/InService";
import OutService from "../services/OutService";
import ProductService from "../services/ProductService";

function Dashboard() {

  // Usar moment back-front
  const currentDate = new Date();
  let dateSeconds = Date.parse(currentDate);

  let previusDateSeconds = currentDate.setFullYear(currentDate.getFullYear() - 1);

  let totalYear = 0;
  let totalMonth = 0;

  let currentMonth = currentDate.getMonth() + 1;
  let previusMonth = currentDate.getMonth();

  let sumInsOuts = 0;

  const [sales, setSales] = useState(0);
  const [earnings, setEarnings] = useState([]);
  const [ins, setIns] = useState(0);
  const [outs, setOuts] = useState(0);
  const [orders, setOrders] = useState();
  const [products, setProducts] = useState();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    retriveOredersSales();
    retriveProducts();
    retriveIns();
    retriveOuts();
  }, []);

  useEffect(() => {
    sumOutsIns();
  }, [ins, outs]);

  const retriveOredersSales = () => {
    OrderService.getAll()
    .then(response => {
      setSales(response.data.length);
      setOrders(response.data);
      setEarnings(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const retriveProducts = () => {
    ProductService.getAll()
    .then(response => {
      setProducts(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const retriveIns = () => {
    InService.getAll()
    .then(response => {
      setIns(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const retriveOuts = () => {
    OutService.getAll()
    .then(response => {
      setOuts(response.data.length);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const sumOutsIns = () => {
    setSum(ins + outs);
  };

  // Moment
  const sumMonth = earnings.reduce((current, next) => {
    let month = new Date(next.orderDate).getMonth();
    if (month >= previusMonth && month <= currentMonth) {
      totalMonth = current + +next.totalAmount;
    }

    return totalMonth;
  }, 0);

  const sumYear = earnings.reduce((current, next) => {
    let date = Date.parse(next.orderDate);
    if (date >= previusDateSeconds && date <= dateSeconds) {
      totalYear = current + + next.totalAmount;
    }
    return totalYear;
  }, 0);

  return (
    <div className="container-fluid">
      <div className="row">
        <Card
          title="Ganancias (mensuales)"
          // Dar formato de dinero
          cuantity={`$${sumMonth}`}
          icon={faDollarSign}
          colorBorder="border-left-primary"
          colorText="text-primary"
        />
        <Card
          title="Ganancias (anuales)"
          cuantity={`$${sumYear}`}
          icon={faSignal}
          colorBorder="border-left-success"
          colorText="text-success"
        />
        <Card
          title="Entradas y salidas"
          cuantity={sum}
          icon={faClipboardList}
          colorBorder="border-left-info"
          colorText="text-info"
        />
        <Card
          title="Ventas"
          cuantity={sales}
          icon={faShoppingCart}
          colorBorder="border-left-warning"
          colorText="text-warning"
        />
      </div>
      <div className="row">
        <InfoPanelScrap title="Productos agregados recientemente" data={products} />
        <InfoPanel title="Ultimas ventas" data={orders} />
      </div>
    </div>
  );
}

export default Dashboard;