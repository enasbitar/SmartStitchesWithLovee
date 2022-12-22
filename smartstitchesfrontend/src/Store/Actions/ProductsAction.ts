export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
//functions
export const getAllProductsSuccess = (products: any) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: products,
});
