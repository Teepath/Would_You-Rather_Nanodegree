import React, { Component, Fragment } from "react";
import Card from "./Card";
import AnsweredView from "./AnsweredCard";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_answered: false,
    };
  }

  handleToggleAnswered = () => {
    this.setState(() => ({
      is_answered: true,
    }));
  };

  handleToggleUnanswered = () => {
    this.setState(() => ({
      is_answered: false,
    }));
  };

  render() {
    const { questionids } = this.props;

    console.log(questionids);
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loading == null ? null : (
          <div className="container">
            <div className="dashboard-header">
              <div
                className="unanswered"
                onClick={() => this.handleToggleUnanswered()}
              >
                Unanswered Questions
              </div>
              <div
                className="answered"
                onClick={() => this.handleToggleAnswered()}
              >
                Answered Questions
              </div>
            </div>

            {!this.state.is_answered ? (
              <Card questionids={questionids} />
            ) : (
              <AnsweredView questionids={questionids} />
            )}

            {/* <Card /> */}
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToprop = ({ questions, authedUser }) => {
  return {
    questionids: questions
      ? Object.keys(questions).sort(
          (a, b) => questions[b].timestamp - questions[a].timestamp
        )
      : null,
    loading: authedUser == null,
  };
};

export default connect(mapStateToprop)(Dashboard);
