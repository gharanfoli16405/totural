import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { JSXRouter } from "router";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
// import App from "App";

//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <RouterProvider router={JSXRouter} />

  // {/* // <BrowserRouter><App /></BrowserRouter> */}
  // </React.StrictMode>
);
