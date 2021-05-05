import React from "react";
import PropTypes from "prop-types";
import DislayCard from "./DisplayCard";

function Card({ questionids }) {
  return (
    <ul>
      {questionids.map((id) => (
        <DislayCard id={id} key={id} />
      ))}
    </ul>
  );
}

Card.propTypes = {
  questionids: PropTypes.array.isRequired,
};

export default Card;
