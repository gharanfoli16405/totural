import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import ProductList from "pages/ProductList";
import NotFound from "pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={NotFound} />
      <Route path="/about-us" element={<AboutUs />} errorElement={NotFound} />
      <Route
        path="/product-list"
        element={<ProductList />}
        errorElement={NotFound}
      />
      <Route path="*" element={<Navigate to="/NotFound" replace />} />
    </Routes>
  );
};

export default App;
