import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequireAuth = ({ children }) => {
  let location = useLocation();

  console.log("location in reqAuth", location);

  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};
