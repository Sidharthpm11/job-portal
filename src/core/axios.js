import axios from "axios";
import { baseUrl } from "./config";

axios.defaults.baseURL = baseUrl;

export default axios;