import { useEffect, useState } from "react";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../../components/search-bar/search-bar";
import TableProducts from "../../components/tables/TableProducts";
import ButtonBig from "../../components/buttons/button-big";

import { useNavigate } from "react-router-dom";

import ProductService from "../../services/ProductService";

function Products() {
  const navigate = useNavigate();

  let index = 0;

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    retriveProducts();
  }, []);

  const retriveProducts = () => {
    ProductService.getAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeState = (e) => {
    index = e.idProduct;
  };

  const handleDelete = () => {
    if (index === 0) {
      alert("No se a seleccionado ningun producto");
      return;
    }

    ProductService.remove(index)
    .then((response) => {
      alert(response.data);
      index = 0;
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  };

  const handleUpdate = () => {
    console.log(index);
    if (index === 0 || index === undefined) {
      alert("No se a seleccionado ningun producto");
      return;
    }
    ProductService.get(index)
    .then((response) => {
      const product = response.data;
      navigate("/productos/actualizar", { replace: true, state:{index, product} });
    })
    .catch((e) => {
      console.log(e);
    });

  };

  const handleSearch = (data) => {
    ProductService.search(data).then((response) => {
      if(data !== "") {
        setProducts(response.data)
      } else {
        retriveProducts();
      }
      setSearch("");
    });
  }

  const onChange = (e) => {
     setSearch(e.target.value)
  }

  return (
    <div className="row-pages col-xl">
      <div className="card shadow mb-4 col-xl-9 col-lg-7">
        <div className="card-body">
          <SearchBar 
          searchIndex = {search}
          findByIndex = {handleSearch}
          onChange = {onChange}
          placeholder={"Buscar (Nombre, Marca, ID)..."}/>
          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-body">
                <TableProducts
                  inActive={index}
                  changeState={changeState}
                  dataset={products}
                  show={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <ButtonBig icon={faPlus} link="/productos/agregar" />
        <ButtonBig icon={faEdit} action={() => handleUpdate()} />
        <ButtonBig icon={faTrash} action={() => handleDelete()} />
      </div>
    </div>
  );
}

export default Products;
