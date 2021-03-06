import React from "react";
import YourVote from "./YourVote";
import PropTypes from "prop-types";

function QuestionCard({ text, vote, total, width, userVote }) {
  console.log(userVote);
  if (text) {
    return (
      <div className="poll_card">
        <h3> Would you rather</h3>
        {userVote ? <YourVote /> : null}
        <h4>{text}</h4>
        <div className="poll_result">
          <div
            style={{
              background: "green",
              width: `${Math.floor(width)}%`,
            }}
          >
            {Math.floor(width)}%
          </div>
        </div>
        <p>{`${vote} out of ${total}votes`}</p>
      </div>
    );
  } else {
    return <div> No page Found</div>;
  }
}

QuestionCard.propTypes = {
  text: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  userVote: PropTypes.bool.isRequired,
};

export default QuestionCard;
