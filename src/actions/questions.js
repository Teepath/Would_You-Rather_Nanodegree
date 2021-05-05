import { handleQuestionAnswer, handleSavedQuestion } from "../utils/api";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ANSWERED_QUESTION = "ANSWERED_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const saveAnswered = ({ authedUser, qid, answer }) => {
  return {
    type: ANSWERED_QUESTION,
    authedUser,
    qid,
    answer,
  };
};

export const savedQuestionState = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export function handleAddQuestion({ author, optionOneText, optionTwoText }) {
  return (dispatch) => {
    // const { authedUser } = getState();
    // dispatch(showLoading());
    return handleSavedQuestion({
      author,
      optionOneText,
      optionTwoText,
    }).then((question) => dispatch(savedQuestionState(question)));
    // .then(() => dispatch(hideLoading()));
  };
}

export function addAnsweredQuestion(info) {
  return (dispatch) => {
    dispatch(saveAnswered(info));
    return handleQuestionAnswer(info).catch((e) => {
      console.warn("Error in voting", e);
      dispatch(saveAnswered(info));
      alert("There was an error, try again.");
    });
  };
}
