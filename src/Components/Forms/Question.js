import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../utils/helpers";
import AnsweredPoll from "../Poll/Pol";
import { addAnsweredQuestion } from "../../actions/questions";

class Question extends Component {
  state = {
    answer: "",
  };

  handleChange = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };

  handleSummit = (e) => {
    e.preventDefault();
    const qid = this.props.match.params.id;
    const { answer } = this.state;
    const { authedUser } = this.props;
    console.log(answer);
    this.props.dispatch(addAnsweredQuestion({ authedUser, qid, answer }));
  };

  handleDisabled = () => {
    return this.state.answer === "";
  };

  render() {
    const { question, authedUser } = this.props;
    console.log(this.state);

    const {
      name,
      avatar,
      optionOneText,
      optionTwoText,
      optionTwoHasVote,
      optionOneHasVote,
    } = question;
    console.log(question);

    if (optionOneHasVote || optionTwoHasVote) {
      return <AnsweredPoll question={question} authedUser={authedUser} />;
    }
    return (
      <div className="question_wrapper">
        <div className="card_wrapper">
          <div className="card_header">{`${name} asks:`}</div>
          <div className="card_body">
            <div className="card_avatar">
              <img src={avatar} alt="profile" className="avatar" />
            </div>
            <div className="v_line"></div>
            <div className="card_content">
              <h4> Would you rather</h4>
              <form onSubmit={this.handleSummit}>
                <label htmlFor="option_1">
                  <input
                    type="radio"
                    id="option_one"
                    name="question"
                    value="optionOne"
                    onChange={(e) => this.handleChange(e)}
                  />
                  {optionOneText}
                  {/* <span className="checkmark"></span> */}
                </label>
                <br />
                <label htmlFor="option_2">
                  <input
                    type="radio"
                    id="option_two"
                    name="question"
                    value="optionTwo"
                    onChange={(e) => this.handleChange(e)}
                  />
                  {optionTwoText}
                  {/* <span className="checkmark"></span> */}
                </label>
                <button
                  type="submit"
                  style={{
                    margin: "5px",
                    background: "ligth-green",
                    color: "white",
                  }}
                  disabled={this.handleDisabled()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprop = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params;
  const question = questions ? questions[id] : null;
  return {
    id,
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};

export default connect(mapStateToprop)(Question);
