import React from "react";
import AnsweredCard from "./DisplayAnswered";
import PropTypes from "prop-types";

function ViewCard({ questionids }) {
  return (
    <ul>
      {questionids.map((id) => (
        <AnsweredCard id={id} key={id} />
      ))}
    </ul>
  );
}

ViewCard.propTypes = {
  questionids: PropTypes.array.isRequired,
};

export default ViewCard;
