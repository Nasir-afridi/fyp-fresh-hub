import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import SignUp from "./pages/signUp";
// import Otp from "./pages/otp";
import Login from "./pages/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/otp" element={<Otp />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
