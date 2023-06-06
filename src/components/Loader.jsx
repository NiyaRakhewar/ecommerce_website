import React from "react";
import loader from "../components/Images/gif_img.gif";
import "../components/styles/Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loader} alt="" className="loader" />
    </div>
  );
};
