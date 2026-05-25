import axios from "axios";

const API = axios.create({
  baseURL: "https://mineuc-backend.onrender.com/api"
});

export default API;
