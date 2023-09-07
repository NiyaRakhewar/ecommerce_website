import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")) || "";
  // console.log(user, "from local");
  const [token, setToken] = useState(encodedToken || "");
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profile, setProfile] = useState({
    firstName: user.firstName || "",
    email: user.email || "",
    lastName: user.lastName || "",
  });

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        profile,
        setProfile,
        signUpData,
        setSignUpData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
