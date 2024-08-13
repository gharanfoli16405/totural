import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import { route } from "router";

// import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
    {/* <RouterProvider fallbackElement={<BigSpinner />}/> */}
  </React.StrictMode>
);
