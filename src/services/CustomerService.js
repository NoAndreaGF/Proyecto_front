import http from "../http-common";

const getAll = () => {
  return http.get("/customers");
};

const get = (id) => {
  return http.get(`/customers/${id}`);
};

const create = (data) => {
  return http.post("/customers", data);
};

const update = (id, data) => {
  return http.patch(`/customers/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/customers/${id}`);
};

const search = (data) => {
  return http.get(`/customers/busqueda/${data}`);
}

const CustomerService = {
  getAll,
  get,
  create,
  update,
  remove,
  search
};

export default CustomerService;