import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TitlePages from "../title-pages/title-pages";
import Card from "../card/Card";

function ProductsTitle({data}) {

    return (
        <div className="row-pages">
            <TitlePages title="Productos" description="Administra los productos" />
            <Card
                title="Productos"
                cuantity={data}
                icon={faShoppingCart}
                colorBorder="border-left-pages"
                colorText="text-pages"
            />
        </div>
    );
}

export default ProductsTitle;