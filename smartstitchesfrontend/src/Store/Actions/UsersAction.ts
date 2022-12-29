export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
//functions
export const getAllUsersSuccess = (users: any) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: users,
});
