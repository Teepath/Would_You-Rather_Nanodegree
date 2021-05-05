import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("userId")) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/no-page" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.authedUser,
});
export default connect(mapStateToProps)(AuthRoute);
