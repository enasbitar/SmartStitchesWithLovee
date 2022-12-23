import productservice from "../../Services/productservice";
import { removeLoading, setLoading } from "../Actions/LoadingAction";
import { setMessage } from "../Actions/MessageAction";
import {
  createProductSuccess,
  deleteProductSuccess,
  getAllProductsSuccess,
  updateProductSuccess,
} from "../Actions/ProductsAction";

export const getAllProductsRequest = () => (dispatch: any) => {
  try {
    dispatch(setLoading());
    //API call
    productservice.getAllProducts().then((response: any) => {
      //dispath
      dispatch(getAllProductsSuccess(response.data));
      dispatch(removeLoading());
      dispatch(
        setMessage("success", "You fetched all the products succesfully")
      );
    });
  } catch (error) {
    console.log("error", error);
    dispatch(removeLoading());
  }
};

export const createProductRequest =
  (product: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      productservice.createProduct(product).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createProductSuccess(response.data));
          //only close the pop up when the response is success
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };

export const updateProductRequest =
  (id: string, product: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      productservice.updateProduct(id, product).then(
        (response: any) => {
          console.log("response", response);
          dispatch(updateProductSuccess(response.data));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };

export const deleteProductRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      productservice.deleteProduct(id).then(
        (response: any) => {
          console.log("response", response);
          dispatch(deleteProductSuccess(response.data.id));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };
<<<<<<< HEAD

=======
>>>>>>> 8978f7b468523266b5bf8c354946e58486cdad3b
