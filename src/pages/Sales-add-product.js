
import FormSalesAddProduct from "../components/form-sales/form-sales-add-product";
import ButtonBack from "../components/buttons/button-back";


function SalesAddProduct() {
    return (
        <div className="container-fluid">
                   
            <div className="form-row">
                <ButtonBack link="/ventas/agregar" />
            </div>

            <div className="row-pages col-xl">
                <FormSalesAddProduct />
            </div>
        </div>
    );
}

export default SalesAddProduct;