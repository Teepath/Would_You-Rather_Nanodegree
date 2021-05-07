import { _getUsers, _createUser } from "../utils/_DATA";
import { handleAllInitialData } from "./shared";
import { setAuthedUserId } from "./authedUser";

export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const createNewUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

export const handleGetAllUsers = () => (dispatch) => {
  _getUsers().then((users) => {
    dispatch(getUsers(users));
  });
};

export const handleNewUserCreation = (name, history) => (dispatch) => {
  _createUser(name).then((user) => {
    dispatch(createNewUser(user));
    let id = Object.keys(user);
    dispatch(handleAllInitialData(id[0]));
    dispatch(setAuthedUserId(id[0]));
  });
};
