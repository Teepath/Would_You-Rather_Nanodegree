import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
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
import { handleAllInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleAllInitialData());
  }

  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Router history={HashRouter}>
        <div className="header-title"> React App</div>

        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <AuthRoute path="/questions/:id" component={Question} />
          <AuthRoute path="/add" component={Form} />
          <AuthRoute path="/leaderboard" component={LeaderBoard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />

          <Route component={NoPage} />
        </Switch>

        {/* <Route render={() => <Redirect to={{ pathname: "/" }} />} /> */}
        {/* <Route path="*" component={NoPage} /> */}
        {/* <Redirect from="/" to="/login" /> */}
      </Router>
    );
  }
}

const mapStateToprop = ({ authedUser }) => {
  return {
    userId: authedUser,
    loading: authedUser == null,
  };
};

export default connect(mapStateToprop)(App);
