import { httpCommon } from "./http-common";

//function to get all users
const getAllProducts = () => {
  return httpCommon.get("/products/");
};

const createProduct = (product: any) => {
  return httpCommon.post("Product", product);
};

const updateProduct = (id: string, product: any) => {
  return httpCommon.put(`Product/${id}`, product);
};

const deleteProduct = (id: string) => {
  return httpCommon.delete(`Product/${id}`);
};

const ProductsService = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default ProductsService;
