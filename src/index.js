import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middlewares.js";
import { handleAllInitialData } from "./actions/shared";
import { getUserID } from "./actions/authedUser";

const store = createStore(reducers, middleware);

const token = JSON.parse(localStorage.getItem("userId"));

try {
  if (token) {
    store.dispatch(handleAllInitialData(token));
    store.dispatch(getUserID(token));
  } else {
    console.log("nothing");
  }
} catch (error) {
  console.log(error);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
