import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _createUser,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function handleSavedQuestion(info) {
  return _saveQuestion(info);
}

export function handleUsercCreation(n) {
  return _createUser(n);
}

export function handleQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
