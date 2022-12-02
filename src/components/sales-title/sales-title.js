
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TitlePages from "../title-pages/title-pages";
import Card from "../card/Card";

function SalesTitle({data}) {

    return (
        <div className="row-pages">
            <TitlePages title="Ventas" description="Administra las ventas" />
            <Card
                title="Ventas"
                cuantity={data}
                icon={faShoppingCart}
                colorBorder="border-left-pages"
                colorText="text-pages"
            />
        </div>
    );
}

export default SalesTitle;