import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <h1>Public routes</h1>
      <Outlet />
    </>
  );
};

export default PublicRoutes;
