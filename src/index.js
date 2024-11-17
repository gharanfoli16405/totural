import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { JSXRouter } from "router";
import { CountProvider } from "context/CountProvider/CountProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("index.js");

root.render(
  <React.StrictMode>
    <CountProvider>
      <RouterProvider router={JSXRouter} />
    </CountProvider>
  </React.StrictMode>
);
