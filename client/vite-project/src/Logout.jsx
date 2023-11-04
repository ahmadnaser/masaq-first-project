import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const userContext = useContext(UserContext);

  userContext.setUser({
    isAuthenticated: false,
  });

  localStorage.clear();
  // window.location.href = "/?logout=true";
  return <Navigate to="/?logout=true"></Navigate>;
};

export default Logout;
