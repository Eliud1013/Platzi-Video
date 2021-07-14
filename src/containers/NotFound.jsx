import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <h3>
        <Link to="/">Go back</Link>
      </h3>
    </>
  );
};

export default NotFound;
