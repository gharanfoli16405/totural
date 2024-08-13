import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import AboutUs from "pages/AboutUs";
import Home, { HomeLoader } from "pages/Home";
import Error from "components/Error";

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home />}
      loader={HomeLoader}
      errorElement={<Error />}
    >
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);

export { JSXRouter as route };
