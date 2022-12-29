import { httpCommon } from "./http-common";

//function to get all users
const getAllUsers = () => {
  return httpCommon.get("/users/");
};

const UsersService = {
  getAllUsers,
};

export default UsersService;
