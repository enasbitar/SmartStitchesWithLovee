export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
//functions
export const getAllProductsSuccess = (products: any) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: products,
});

export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const createProductSuccess = (product: any) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const updateProductSuccess = (product: any) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const deleteProductSuccess = (id: string) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});
