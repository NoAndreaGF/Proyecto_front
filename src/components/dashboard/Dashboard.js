import Card from "../card/Card";
import InfoPanel from "../info-panel/InfoPanel";
import {
  faDollarSign,
  faSignal,
  faClipboardList,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";


function Dashboard() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Card title="Ganancias (mensuales)" cuantity="$40,000" icon={faDollarSign} colorBorder="border-left-primary" colorText="text-primary" />
          <Card title="Ganancias (anuales)" cuantity="$215,000" icon={faSignal} colorBorder="border-left-success" colorText="text-success" />
          <Card title="Entradas y salidas" cuantity="20" icon={faClipboardList} colorBorder="border-left-info" colorText="text-info" />
          <Card title="Ventas" cuantity="18" icon={faShoppingCart} colorBorder="border-left-warning" colorText="text-warning" />
        </div>
        <div className="row">
          <InfoPanel title="Productos agregados recientemente" />
          <InfoPanel title="Ultimas ventas" />
        </div>
      </div>
    );
  }
  
  export default Dashboard;