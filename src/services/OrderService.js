import http from "../http-common";

const getAll = () => {
  return http.get("/orders");
};

const get = (id) => {
  return http.get(`/orders/${id}`);
};

const create = (data) => {
  return http.post("/orders", data);
};

const update = (id, data) => {
  return http.patch(`/orders/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/orders/${id}`);
};

const search = (data) => {
  return http.get(`/orders/busqueda/${data}`);
}

const OrderService = {
  getAll,
  get,
  create,
  update,
  remove,
  search
};

export default OrderService;