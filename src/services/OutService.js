import http from "../http-common";

const getAll = () => {
  return http.get("/outs");
};

const get = (id) => {
  return http.get(`/outs/${id}`);
};

const create = (data) => {
  return http.post("/outs", data);
};

const update = (id, data) => {
  return http.patch(`/outs/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/outs/${id}`);
};

const OutService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default OutService;