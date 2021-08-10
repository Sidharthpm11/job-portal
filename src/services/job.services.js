import axios from '../core/axios';

let jobs;
export const getJobs = async () => {
  if (!jobs) {
    await setJobsFromApi();
  }
  return new Promise((resolve, reject) => {
    resolve(jobs);
  });
};

export const getJobDetails = async (id) => {
  if (!jobs) {
    await setJobsFromApi();
  }
  return new Promise((resolve, reject) => {
    resolve(jobs.find((a) => a.id === id));
  });
};

const setJobsFromApi = async () => {
  const res = await axios.get("/data/jobs.json");
  jobs = res.data;
};
