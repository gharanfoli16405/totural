import { useRouteError, isRouteErrorResponse } from "react-router-dom";
const ErrorBoundary = () => {
  let error = useRouteError();

  const hasError = isRouteErrorResponse(error);

  return !hasError ? (
    <div>
      <h1>Oops!</h1>
      <h2>{error.status}</h2>
      <p>{error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
    </div>
  ) : (
    <div>Oops</div>
  );
};

export default ErrorBoundary;
