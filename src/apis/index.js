import axios from "axios";

const baseURL = import.meta.env.VUE_APP_API || "http://localhost:5000"; // Thay đổi URL mặc định nếu cần
axios.defaults.headers.common["Authorization"] =
  "Bearer" + localStorage.getItem("token");
export default () => {
  return axios.create({
    baseURL: baseURL,
  });
};
