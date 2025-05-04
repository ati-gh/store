import axios from "axios";
const BASE_URL = "https://fakestoreapi.com/";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {},
});
api.interceptors.request.use((req) => req);
api.interceptors.response.use((res) => res.data);
export default api;
