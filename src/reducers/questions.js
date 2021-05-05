import {
  GET_QUESTIONS,
  ANSWERED_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWERED_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    case ADD_QUESTION:
      const { question } = action;
      console.log(question);
      return {
        ...state,
        [action.question.id]: question,
      };

    default:
      return state;
  }
}
