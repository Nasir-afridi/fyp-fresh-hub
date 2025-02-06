import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/pricing"; // Assuming you have this page
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import PrivateRoute from "./components/privateRoutes"; // Import PrivateRoute
import PublicRoute from "./components/publicRoute"; // Import PublicRoute

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
      <Route path="/login" element={<PublicRoute element={<Login />} />} />

      {/* Private routes */}
      <Route path="/" element={<PrivateRoute element={<Home />} />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/about" element={<PrivateRoute element={<About />} />} />
      <Route path="/pricing" element={<PrivateRoute element={<Product />} />} />
    </Routes>
  );
};

export default AppRoutes;
