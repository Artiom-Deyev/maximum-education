import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "mulitpart/form-data",
  },
});

export default {
  getCities() {
    return apiClient.get("/cities");
  },
};
