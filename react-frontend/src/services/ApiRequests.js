import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

class ApiRequests {
  constructor() {}
  //get request
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  //post request
  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  //delete request
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  //patch or put request
  patch = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .patch(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default ApiRequests;
