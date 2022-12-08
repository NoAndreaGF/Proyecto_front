import http from "../http-common";

const getAll = () => {
  return http.get("/products");
};

const get = (id) => {
  return http.get(`/products/${id}`);
};

const create = (data) => {
  return http.post("/products", data);
};

const update = (id, data) => {
  return http.patch(`/products/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/products/${id}`);
};

const search = (data) => {
  return http.get(`/products/busqueda/${data}`);
}

const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  search
};

export default ProductService;