import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom"; //Navigate , Link
import Home, { careersLoader } from "pages/Home";
import AboutUs, { getData } from "pages/AboutUs";
import NotFound from "pages/NotFound";
import Error from "components/Error";
import { Suspense } from "react";

export let JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        loader={careersLoader}
        errorElement={<Error />}
      >
        <Route
          path="about"
          element={
            <Suspense fallback={<>loading</>}>
              <AboutUs />
            </Suspense>
          }
          loader={getData}
        />
        <Route path="NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Route>

      {/* 
      <Route path="/" element={<Home />} loader={careersLoader}>
        <Route
          path="about"
          element={
            <Suspense fallback={<>loading</>}>
              <AboutUs />
            </Suspense>
          }
          loader={getData}
          errorElement={<Error />}
        />
        <Route path="NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Route> */}

      {/* <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/about" element={<AboutUs />} />
  
          
          <Route path="/:id/productList" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
  
       
        </Route> */}
    </>
  )
);
