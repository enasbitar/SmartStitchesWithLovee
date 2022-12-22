import { httpCommon } from "./http-common";

//function to get all users
const getAllProducts = () => {
  return httpCommon.get("/products/");
};

const productservice = {
  getAllProducts,
};

export default productservice;
