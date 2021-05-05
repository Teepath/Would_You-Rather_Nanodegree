import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;
    return (
      <li className="board-wrapper">
        <div className="board_avatar ">
          <img src={avatarURL} className="avatar" alt="profile" />
        </div>
        <div className="board-line"></div>
        <div className="board-contact">
          <h4>{name} </h4>
          <div>
            {" "}
            <h6> Answered questions </h6>{" "}
            <span> {Object.keys(answers).length}</span>{" "}
          </div>
          <div>
            {" "}
            <h6> Created Question</h6> <span> {questions.length}</span>{" "}
          </div>
        </div>
        <div className="board-line"></div>
        <div className="score-board">
          <div className="score"> Score</div>
          <div className="score-number">
            <div className="number">
              {Object.keys(answers).length + questions.length}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToprop = ({ users }, { id }) => {
  const user = users[id];
  return {
    user: user ? user : null,
  };
};

export default connect(mapStateToprop)(Card);
