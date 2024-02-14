import React from "react";
import { useRouteError } from "react-router-dom"; // Helps to get more details about the ERROR

const Error = () => {
  const errObj = useRouteError();
  console.log(errObj);

  return (
    <div>
      <h3>Oops! Something went wrong!! {errObj}</h3>
      <h3>
        {errObj.status} - {errObj.statusText}
      </h3>
    </div>
  );
};

export default Error;
