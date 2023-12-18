import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorURL } from "../utils/constant";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="errorBOX">
      <h1>Error</h1>
      <img src={ErrorURL} alt="" />
      <h2>{err.status + ": " + err.statusText}</h2>
    </div>
  );
};

export default Error;
