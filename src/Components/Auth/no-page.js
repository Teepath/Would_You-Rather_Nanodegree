import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
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
        404 page Please sign in{" "}
        <Link to="/login" style={{ background: "green" }}>
          here{" "}
        </Link>{" "}
      </p>
    </div>
  );
};

export default Nopage;
