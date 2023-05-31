import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { ProductListContext } from "../../context/ProductListContext";

export const Profile = () => {
  // const { dispatch } = useContext(ProductListContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setToken("");
  };

  return (
    <div className="topToBody">
      <h1>This is the Profile page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};