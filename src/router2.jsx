import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom"; //Navigate , Link
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import NotFound from "pages/NotFound";
import ProductList from "pages/ProductList";
import Product from "pages/Product";
import ProtectedRoutes from "components/ProtectedRoutes";
import AboutUs from "pages/AboutUs";

export let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/:id/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />

        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Route>
    </>
  )
);
