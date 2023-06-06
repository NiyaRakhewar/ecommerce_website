import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../../styles/Profile.css";
import { Details } from "./Details";
import { Addresses } from "./Addresses";
import { OrderSummary } from "./OrderSummary";
// import { AuthContext } from "../../../context/AuthContext";
// import { ProductListContext } from "../../context/ProductListContext";

export const Profile = () => {
  // const { dispatch } = useContext(ProductListContext);
  // const { setToken } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.clear();
  //   navigate("/login");
  //   setToken("");
  // };

  const toggleActive = ({ isActive }) => {
    return isActive
      ? "profile-nav-item nav-link-active"
      : "profile-nav-item nav-link";
  };

  return (
    <div className="topToBody">
      <div className="profile-outer-container">
        <div className="profile-container">
          <div className="profile-nav">
            <NavLink to="/profile/details" className={toggleActive}>
              Profile Information
            </NavLink>
            {/*address management and order management will be added later on*/}
            <NavLink to="/profile/addresses" className={toggleActive}>
              Addresses
            </NavLink>
            <NavLink to="/profile/ordersummary" className={toggleActive}>
              Order Summary
            </NavLink>
          </div>
          <Routes>
            <Route path="details" element={<Details />} />
          </Routes>

          <Routes>
            <Route path="addresses" element={<Addresses />} />
          </Routes>

          <Routes>
            <Route path="ordersummary" element={<OrderSummary />} />
          </Routes>
        </div>
      </div>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};
