import { GET_ALL_PRODUCTS_SUCCESS } from "../Actions/ProductsAction";

const initialState = [] as any;

const ProductReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  console.log("payload", payload);
  switch (type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return payload;

    default:
      return state;
  }
};
export default ProductReducer;
