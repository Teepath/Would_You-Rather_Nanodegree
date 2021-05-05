import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";

class QuestionForm extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    message: "",
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState(() => ({
      [id]: value,
    }));
  };

  handleDisabled = () => {
    return this.state.optionOneText === "" || this.state.optionTwoText === "";
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const optionOneText = this.state.optionOneText;
    const optionTwoText = this.state.optionTwoText;
    const author = this.props.authedUser;

    this.props.dispatch(
      handleAddQuestion({ optionOneText, optionTwoText, author })
    );

    this.props.history.push("/home");
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="form-title">Create New Question</div>
        <form className="form-body" onSubmit={this.handleSubmit}>
          <h6> Complete the question:</h6>
          <h4>Would you rather...</h4>
          <input
            name="option_1"
            id="optionOneText"
            placeholder="Enter Option One Text Here"
            onChange={(e) => this.handleChange(e)}
          />
          <div className="segment">
            <div className="line-left"></div>
            OR
            <div className="line-right"></div>
          </div>
          <input
            name="option_2"
            id="optionTwoText"
            placeholder="Enter Option Two Text Here"
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit" disabled={this.handleDisabled()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionForm);
