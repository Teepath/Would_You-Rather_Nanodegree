import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "../App.css";

import Login from "./Auth/login";

import Navbar from "./Nav/Header";
import Dashboard from "./Home/Dashbord";
import Question from "./Forms/Question";
import Poll from "./Poll/Pol";
import Form from "./Forms/QuestionForm";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import AuthRoute from "./Auth/AuthGuide";
import NoPage from "./Auth/no-page";
import SignUp from "./Auth/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header-title"> React App</div>
        <Navbar />

        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />

        <AuthRoute path="/dashboard" exact component={Dashboard} />
        <AuthRoute path="/questions/:id" component={Question} />
        <AuthRoute path="/poll" component={Poll} />
        <AuthRoute path="/add" component={Form} />
        <AuthRoute path="/leaderboard" component={LeaderBoard} />
        <Route path="/no-page" exact component={NoPage} />

        <Redirect to="/no-page" />
      </Router>
    );
  }
}

const mapStateToprop = ({ authedUser }, props) => {
  return {
    userId: authedUser,
    loading: authedUser == null,
  };
};

export default connect(mapStateToprop)(App);
