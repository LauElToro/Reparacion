import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children, ...props }) => {
  return isAuthenticated ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
