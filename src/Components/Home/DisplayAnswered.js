import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { formatQuestion } from "../../utils/helpers";

class DisplayAnswerView extends Component {
  handleRoute = (id) => {
    this.props.history.push(`/questions/${id}`);
  };
  render() {
    const { question } = this.props;
    if (!(question.optionOneHasVote || question.optionTwoHasVote)) {
      return null;
    }
    const { name, avatar, optionOneText, id } = question;
    return (
      <li className="card_wrapper">
        <div className="card_header">{`${name} says:`}</div>
        <div className="card_body">
          <div className="card_avatar">
            <img src={avatar} className="avatar" alt="profile" />
          </div>
          <div className="v_line"></div>
          <div className="card_content">
            <h4> Would you rather</h4>
            <p>{`...${optionOneText.substr(0, 14)}...`}</p>
            <button onClick={() => this.handleRoute(id)}>View Poll</button>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToprop = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};

export default connect(mapStateToprop)(withRouter(DisplayAnswerView));
