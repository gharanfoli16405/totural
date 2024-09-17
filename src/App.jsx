import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "router";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading ....</p>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
