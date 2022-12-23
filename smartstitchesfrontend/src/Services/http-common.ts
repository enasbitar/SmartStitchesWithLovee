import axios from "axios";

export const httpCommon = axios.create({
  baseURL: "https://fakestoreapi.com/",
   headers: {
    "Content-type": "application/json",
  },
});
