import axios from "axios";

export const httpCommon = axios.create({
  baseURL: "https://localhost:7125/",
  headers: {
    "Content-type": "application/json",
  },
});
