import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
// import { ProductListContext } from "../../../context/ProductListContext";
import { toast } from "react-toastify";
export const Details = () => {
  //   const { state, dispatch } = useContext(ProductListContext);

  const { profile, setToken } = useContext(AuthContext);

  console.log("profile", profile);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setToken("");
    toast.error("Logged Out", {
      autoClose: 1000,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="profile-details-container">
      <div className="profile-details-item">
        <p className="profile-details-item-label">Name: </p>
        <p>
          {profile.firstName} {profile.lastName}
        </p>
      </div>
      <div className="profile-details-item">
        <p className="profile-details-item-label">Email: </p>
        <p> {profile?.email}</p>
      </div>
      <div className="profile-details-footer">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
