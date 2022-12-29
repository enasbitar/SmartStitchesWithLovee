import UsersService from "../../Services/usersservice";
import { setMessage } from "../Actions/MessageAction";
import { removeLoading, setLoading } from "../Actions/LoadingAction";
import { getAllUsersSuccess } from "../Actions/UsersAction";

export const getAllUsersRequest = () => (dispatch: any) => {
  try {
    dispatch(setLoading());
    //API call
    UsersService.getAllUsers().then((response: any) => {
      //dispath
      dispatch(getAllUsersSuccess(response.data));
      dispatch(removeLoading());
      dispatch(setMessage("success", "You fetched users"));
    });
  } catch (error) {
    dispatch(removeLoading());
  }
};
