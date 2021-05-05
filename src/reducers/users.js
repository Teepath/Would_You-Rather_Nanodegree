import { GET_USERS, CREATE_USER } from "../actions/users";

import { ANSWERED_QUESTION, ADD_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ANSWERED_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    case ADD_QUESTION:
      console.log(action);
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };

    case CREATE_USER: {
      return {
        ...state,
        ...action.user,
      };
    }

    default:
      return state;
  }
}
