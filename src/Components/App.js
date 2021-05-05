import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import "../App.css";

import Login from "./Auth/login";

import Navbar from "./Nav/Header";
import Dashboard from "./Home/Dashbord";
import Question from "./Forms/Question";
import Form from "./Forms/QuestionForm";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import AuthRoute from "./Auth/AuthGuide";
import NoPage from "./Auth/no-page";
import SignUp from "./Auth/SignUp";

class App extends Component {
  shouldComponentUpdate(prevState, nextProps) {
    return false;
  }
  render() {
    return (
      <Router history={HashRouter}>
        <div className="header-title"> React App</div>

        <Navbar />
        <Switch>
          <Route path="/home" exact component={Dashboard} />
          <AuthRoute path="/questions/:id" component={Question} />
          <AuthRoute path="/add" component={Form} />
          <AuthRoute path="/leaderboard" component={LeaderBoard} />
          {/* <Route path="/no-page" component={NoPage} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          {/* <Route render={() => <Redirect to={{ pathname: "/" }} />} /> */}
          <Route path="*" component={NoPage} />
          <Redirect from="/" to="/login" />
        </Switch>
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
