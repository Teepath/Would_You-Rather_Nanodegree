import React from "react";
import QuestionCard from "./PollCard";
import PropTypes from "prop-types";

function Poll({ question, authedUser }) {
  const {
    name,
    avatar,
    votesOne,
    votesTwo,
    optionOneText,
    optionTwoText,
    optionTwoVotelength,
    optionOneVoteLength,
  } = question;
  const total = optionOneVoteLength + optionTwoVotelength;
  const widthPercentOne = (optionOneVoteLength / total) * 100;
  const widthPercentTwo = Math.floor((optionTwoVotelength / total) * 100);
  if (question) {
    return (
      <div className="container">
        <div className="poll-header-card">{`Asked by ${name}:`}</div>
        <div className="card_body">
          <div className="card_avatar">
            {" "}
            <img src={avatar} alt="profile" className="avatar" />
          </div>
          <div className="pol_line"></div>
          <div className="poll_content">
            <h2>Result: </h2>
            <QuestionCard
              text={optionOneText}
              vote={optionOneVoteLength}
              total={total}
              width={widthPercentOne}
              userVote={votesOne ? votesOne.includes(authedUser) : null}
            />
            <QuestionCard
              text={optionTwoText}
              vote={optionTwoVotelength}
              total={total}
              width={widthPercentTwo}
              userVote={votesTwo ? votesTwo.includes(authedUser) : null}
              // authedUser={authedUser}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div> No Page Found</div>;
  }
}

Poll.propTypes = {
  question: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
};

export default Poll;
