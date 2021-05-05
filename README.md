This project Would You Rather. Run npm start or yarn start to lunch the application.

### `yarn start`

R

### `yarn Start or run npm start to lunch this application`

### About The Project

The project is titled Would You Rather. It is my second projects of Nanodegree program. This is to demonstrate my deep grasp an understanding of React and Redux skills.

### Apliication Structures

This application contains several folders and files which are listed in no particular order:
-README.md

- package.json
  -index.js
  -index.css
  -src
  --utils
  ---helpers
  ---api.js
  ---\_DATA.js
  --reducers
  ---authedUser.js
  ---index.js
  ---questions.js
  ---users.js
  --middlewares.js
  ---index.js
  ---logger.js
  --Components
  ---Poll
  ----Pol.js
  ----PoliCard.js
  ----YourVote.js
  ---Nav
  ----Header.js
  ---LeaderBoard
  ----Card.js
  ----LeaderBoard.js
  ---Home
  ----AnsweredCard
  ----Card.js
  ----Dashboard.js
  ----DisplayAnswered.js
  ----DisplayCard.js
  ---Forms
  ----Question.js
  ----QuestionForm.js
  ---Auth
  ----AuthGuide.js
  ----DropDown
  ----login.js
  ----no-page.js
  ----SignUp.js
  --App.js
  -assets
  --action
  ---authedUser.js
  ---questions.js
  ---shared.js
  ---users.js
  --reducers
  ---authedUser.js
  ---index.js
  ---questions.js
  ---users.js

### util

The util folder contains the files - \_DATA.js, api, helpers

### \_DATA.js

This serves as backend for the applications. contains users, questions data as well methods for fetching the data

#####

## APIS

This files hold the method for calling the backend methods

##

### helpers.js

It has the method for formathing question.

###

### Actions.js

This folders contains different files of different actions and actionCreators such as:

## getUserID that dispatch setAuthedUserId that taken id argument and logOUt- set user id to null

##

## handleGetAllUsers execute \_getUsers and dispatch getUsers which taken users objects return from \_getUsers. Also contains handleNewUserCreation method that execute \_createUser which returns user object, which then passing in to dispatch createNewUser method. handleAllInitialData method is also dispatched by handleNewUserCreation with id extracted from the new user as a parameter.

##

##

## The app also have saveAnswered takes three arguments- authedUser, qid, answer , handleAddQuestion takes three argument : author, optionOneText, optionTwoText

## addAnsweredQuestion takes an object of three fields: authedUser, qid, answer

## Learn More

## reducers folders

Contains the login for all the states of the application.

##
