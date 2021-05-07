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

    if (question) {
      if (question.optionOneHasVote || question.optionTwoHasVote) {
        return <AnsweredPoll question={question} authedUser={authedUser} />;
      }
    }

    if (question) {
      return (
        <div className="question_wrapper">
          <div className="card_wrapper">
            <div className="card_header">{`${question.name} asks:`}</div>
            <div className="card_body">
              <div className="card_avatar">
                <img src={question.avatar} alt="profile" className="avatar" />
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
                    {question.optionOneText}
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
                    {question.optionTwoText}
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
    } else {
      return <div> No Page Found</div>;
    }
  }
}

const mapStateToprop = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params;
  const question = questions ? questions[id] : props.history.push("/no-page");
  return {
    id,
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : props.history.push("/no-page"),
  };
};

export default connect(mapStateToprop)(Question);
