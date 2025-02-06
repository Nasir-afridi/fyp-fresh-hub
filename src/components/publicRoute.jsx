import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ element }) => {
  const { token } = useSelector((state) => state.user);

  if (token) {
    return <Navigate to="/home" />;
  }

  return element;
};

export default PublicRoute;
