import * as axios from "axios";

const api = axios.create({
  baseURL: "http://192.99.154.119/",
});

export default api;
