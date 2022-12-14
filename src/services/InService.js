import http from "../http-common";

const getAll = () => {
  return http.get("/ins");
};

const get = (id) => {
  return http.get(`/ins/${id}`);
};

const create = (data) => {
  return http.post("/ins", data);
};

const update = (id, data) => {
  return http.patch(`/ins/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/ins/${id}`);
};

const InService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default InService;