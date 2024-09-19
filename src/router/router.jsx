// import { lazy } from "react";

import { Routes, Route } from "react-router-dom";

// Routes
import PublicRoutes from "router/PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

// components
// import ErrorBoundary from "components/ErrorBoundary";

//Pages
import Home from "pages/Home";
// import ListUsers, { ListUserLoader } from "pages/ListUsers";
// import NotFound from "pages/NotFound";
import Login from "pages/Login";
import AboutUs from "pages/AboutUs";
import Profile from "pages/Profile";
import History from "pages/History";
import Cart from "pages/Cart/Cart";

// const AboutUs = lazy(() => import("pages/AboutUs")); //promise , create File

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
        {/* <Route path="createBuilding" element={<CreateBuilding />} />
        <Route path="addDevice" element={<AddDevice />} />
        <Route path="addLocation" element={<AddLocation />} />
        <Route path="settings" element={<Settings />} />
        <Route path="buildingSetting/:id" element={<BuildingSetting />} />
        <Route path="scenario" element={<Senarios />} /> */}
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="chooseLanguage" element={<ChooseLanguage />} />
        <Route path="intro" element={<Intro />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetPassword" element={<PasswordReset />} />
        <Route path="verification" element={<Confirmation />} /> */}
      </Route>
    </Routes>
  );
};

export default router;
