import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../actions/authedUser";
// import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" exact activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" exact activeClassName="active">
                Leader Board
              </NavLink>{" "}
            </li>
          </ul>
          {user ? (
            <div className="auth-nav">
              <div>{user.name}</div>
              <div>
                <img
                  src={user.avatarURL}
                  alt="profile"
                  className="login_avatar"
                />
              </div>
              <div
                onClick={() => this.props.dispatch(logOut(this.props.history))}
                className="log_out"
              >
                {" "}
                Log out
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToprop = ({ authedUser, users }) => {
  const user = users[authedUser];
  return {
    user,
  };
};

export default connect(mapStateToprop)(withRouter(Header));
