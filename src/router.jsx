import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom"; //Navigate , Link
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import NotFound from "pages/NotFound";
import { Suspense } from "react";
import SignIn from "pages/SignIn";

export let JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route
          path="about"
          element={
            <Suspense fallback={<>loading</>}>
              <AboutUs />
            </Suspense>
          }
        />

        <Route path="NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Route>
      <Route path="sign-in" element={<SignIn />} />
    </>
  )
);
