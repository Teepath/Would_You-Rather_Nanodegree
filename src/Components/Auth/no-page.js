import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nopage = ({ location, ...props }) => {
  const { authedUser } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <p>
        {authedUser ? (
          <h3>
            No match for <code>{location.pathname}</code>
          </h3>
        ) : (
          <div>
            404 page. This page does not exist <br />
            Please sign in
            <Link to="/login" style={{ background: "green" }}>
              here{" "}
            </Link>{" "}
          </div>
        )}
      </p>
    </div>
  );
};

const mapStateToprop = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToprop)(Nopage);
