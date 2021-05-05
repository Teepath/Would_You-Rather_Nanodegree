import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class LeaderBoard extends Component {
  render() {
    const { userids } = this.props;

    return (
      <ul>{userids ? userids.map((id) => <Card id={id} key={id} />) : null}</ul>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    userids: users
      ? Object.keys(users).sort(
          (a, b) =>
            Object.keys(users[b].answers).length +
            users[b].questions.length -
            (Object.keys(users[a].answers).length + users[a].questions.length)
        )
      : null,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
