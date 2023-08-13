import axios from "axios";

const instance = axios.create({
  baseURL: "https://schoolpen.onrender.com/api",
});

export default instance;
