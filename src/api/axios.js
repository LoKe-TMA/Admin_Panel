import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-admin-key":
      import.meta.env.VITE_ADMIN_KEY
  }
});

export default API;
