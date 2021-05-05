import React, { Component } from "react";
import image from "../../assets/logo.png";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { handleGetAllUsers } from "../../actions/users";
import { handleAllInitialData } from "../../actions/shared";
import { Link } from "react-router-dom";

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

  // isItemSelection = (item) => {
  //   if (this.state.selection.find((current) => current.id === item.id)) {
  //     return true;
  //   }
  //   return false;
  // };

  handleAuthUser = () => {
    if (this.state.id) {
      this.props.dispatch(
        handleAllInitialData(this.state.id, this.props.history)
      );
    } else {
      alert("Please choose a user");
    }
  };

  render() {
    const { users } = this.props;

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
  };
};

export default connect(mapStateToprop)(Login);
