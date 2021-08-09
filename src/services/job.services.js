import axios from "axios";

const baseUrl = "http://localhost:3000/";
axios.defaults.baseURL = baseUrl;
let jobs;
export const getJobs = () => {
  if (jobs) {
    return new Promise((resolve, reject) => {
      resolve(jobs);
    });
  } else {
    return axios.get("/data/jobs.json").then((a) => {
      jobs = a.data;
      return a.data;
    });
  }
};

export const getJobDetails = (id) => {
  return new Promise((resolve, reject) => {
    resolve(jobs.find((a) => a.id == id));
  });
};
