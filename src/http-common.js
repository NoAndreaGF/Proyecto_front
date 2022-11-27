import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:2526",
  headers: {
    "Content-type": "application/json"
  }
});