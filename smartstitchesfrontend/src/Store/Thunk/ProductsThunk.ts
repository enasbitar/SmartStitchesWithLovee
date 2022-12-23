
import { error } from "console";
import productservice from "../../Services/productservice";

//Actions
import { getAllProductsSuccess } from "../Actions/ProductsAction";

export const getAllProductsRequest = () => (dispatch: any) => {
  try {
    productservice.getAllProducts().then((response: any) => {
      console.log("Thunk", response.data);
      dispatch(getAllProductsSuccess(response.data));
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProductRequest =
  (id: string, closePopup) => (dispatch: any) => {
    try {
      dispatch(setLoading());
      productservice.deleteProduct(id).then(
        (Response: any) => {
          dispatch(deleteProductSuccess(Response.data.id));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      dispatch(removeLoading());
    }
  };

