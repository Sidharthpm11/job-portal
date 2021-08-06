import axios from "axios";

const baseUrl = "http://localhost:3000/";   
axios.defaults.baseURL = baseUrl;
export const getJobs = () => axios.get("/data/jobs.json").then(a => a.data);
