import React from "react";
import { Route, Navigate } from "react-router-dom";

// Mock authentication function
const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? <Component /> : <Navigate to="/signin" replace />
      }
    />
  );
};

export default PrivateRoute;
