import { getInitialData } from "../utils/api";

import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";
import { setAuthedUserId } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

export const handleAllInitialData = (id) => (dispatch) => {
  dispatch(showLoading());
  getInitialData().then(({ users, questions }) => {
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
    dispatch(setAuthedUserId(id));
    localStorage.setItem("userId", JSON.stringify(id));
    // history.push("/dashboard");
    dispatch(hideLoading());
  });
};
