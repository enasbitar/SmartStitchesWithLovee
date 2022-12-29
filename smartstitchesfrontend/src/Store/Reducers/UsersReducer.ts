import { GET_ALL_USERS_SUCCESS } from "../Actions/UsersAction";

const initialState = [] as any;

const UsersReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_ALL_USERS_SUCCESS:
      return payload;

    default:
      return state;
  }
};
export default UsersReducer;
