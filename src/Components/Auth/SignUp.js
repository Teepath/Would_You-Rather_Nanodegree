import React, { useState } from "react";
import { useDispatch } from "react-redux";
import image from "../../assets/logo.png";
import { handleNewUserCreation } from "../../actions/users";

function SignUp(props) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleNewUserCreation(name));

    props.history.push("/");
  };

  const disabled = () => {
    return name === "";
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header-card">
        <h1> Welcom to would you rather app!</h1>
        <span> Please sign up to use</span>
      </div>
      <img src={image} alt="logo" />
      <span> Sign up</span>

      <input
        id="sign-up"
        type="text"
        placeholder="Please enter you full name"
        className="signup-input"
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit" className="btn login_button" disabled={disabled()}>
        Sign up{" "}
      </button>
    </form>
  );
}

export default SignUp;
