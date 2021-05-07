import { handleAllInitialData } from "./shared";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOG_OUT = "LOG_OUT";

export function setAuthedUserId(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export const getUserID = (id) => (dispatch) => {
  dispatch(setAuthedUserId(id));
  localStorage.setItem("userId", JSON.stringify(id));
  dispatch(handleAllInitialData());
};

export function signOutUser() {
  return {
    type: LOG_OUT,
    id: null,
  };
}

export const logOut = (history) => (dispatch) => {
  dispatch(signOutUser());
  localStorage.removeItem("userId");
  history.push("/login");
};
