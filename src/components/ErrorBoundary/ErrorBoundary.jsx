import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.log("isError", isRouteErrorResponse(error));
  console.log("error", error);

  return <div>ErrorBoundary</div>;
};

export default ErrorBoundary;
