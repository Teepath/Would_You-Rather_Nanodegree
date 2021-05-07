import { getInitialData } from "../utils/api";

import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading";

export const handleAllInitialData = () => (dispatch) => {
  dispatch(showLoading());
  getInitialData().then(({ users, questions }) => {
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));

    dispatch(hideLoading());
  });
};
