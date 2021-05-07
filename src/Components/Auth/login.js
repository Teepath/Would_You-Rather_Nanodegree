import React, { Component } from "react";
import image from "../../assets/logo.png";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { handleGetAllUsers } from "../../actions/users";
import { getUserID } from "../../actions/authedUser";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(handleGetAllUsers());
  }

  handleOnClick = (item) => {
    this.setState(() => ({
      selection: item,
    }));

    this.setState(() => ({
      name: item.name,
      id: item.id,
    }));
  };

  handleAuthUser = () => {
    if (this.state.id) {
      this.props.dispatch(getUserID(this.state.id));
    } else {
      alert("Please choose a user");
    }
  };

  render() {
    const { users, authedUser, location } = this.props;

    const { state } = location;

    if (authedUser) {
      return <Redirect to={state?.from || "/"} />;
    }

    return (
      <div className="container">
        <div className="header-card">
          <h1> Welcom to would you rather app!</h1>
          <span> Please sign in to continue</span>
        </div>
        <img src={image} alt="logo" />
        <span> Sign in</span>
        {users ? (
          <Dropdown
            title="Select User"
            items={users}
            handleOnClick={this.handleOnClick}
            // isItemSelection={this.isItemSelection}
            name={this.state.name}
          />
        ) : (
          <div> Loading... </div>
        )}
        <button
          className="btn login_button"
          onClick={() => this.handleAuthUser()}
        >
          Sign in{" "}
        </button>
        <p>
          {" "}
          Or Click <Link to="/signup">here </Link> to create a new account
        </p>
      </div>
    );
  }
}

const mapStateToprop = ({ users, authedUser }) => {
  return {
    users: users,
    authedUser,
  };
};

export default connect(mapStateToprop)(Login);
