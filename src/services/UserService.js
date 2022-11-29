import http from "../http-common";

const verify = (data) => {
  return http.post("/users/verify", data, {
    headers: { "Content-Type": "application/json" },
  });
};

const getAll = () => {
  return http.get("/users");
};

const get = (id) => {
  return http.get(`/users/${id}`);
};

const create = (data) => {
  return http.post("/users", data, {
    headers: { "Content-Type": "application/json" },
  });
};

const update = (id, data) => {
  return http.patch(`/users/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/users/${id}`);
};

const UserService = {
  verify,
  getAll,
  get,
  create,
  update,
  remove,
};

export default UserService;
