// import React, { useContext } from 'react'
// import { ProductListContext } from '../context/ProductListContext';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductListContext } from "../context/ProductListContext";
import background from "./Images/background.png";

export const PageInformation = () => {
  const { dispatch } = useContext(ProductListContext);

  return (
    <div className="home-page-container">
      <img className="home-img" src={background} alt="bg" />
      <h2>
        <b>"Unlock Your Skin's Potential."</b>
      </h2>
      <p>
        Experience the ultimate in radiant beauty with our innovative skincare
        products, designed to "rejuvenate" your skin and "unveil" your natural
        glow.
      </p>
      <Link to="/productpage" onClick={() => dispatch({ type: "CLEAR" })}>
        <button className="btn-all"> Lets Shop🔓 </button>
      </Link>
    </div>
  );
};
