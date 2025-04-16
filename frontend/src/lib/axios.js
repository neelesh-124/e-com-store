import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? "http://localhost:300/api" : "/api",
  withCredentials: true, // allows us to send cookies to the server
});

export default axiosInstance;
