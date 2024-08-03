import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
// useLoaderData

const Error = () => {
  const error = useRouteError();

  return !isRouteErrorResponse(error) ? (
    <div className="bg-red-600">{error.response.status}</div>
  ) : (
    <div className="bg-red-600">Oops</div>
  );
};

export default Error;
