// import React, { useContext } from 'react'
// import { ProductListContext } from '../context/ProductListContext';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductListContext } from "../context/ProductListContext";

export const PageInformation = () => {
  const { dispatch } = useContext(ProductListContext);

  return (
    <div className="home-page-container">
      <Link to="/productpage" onClick={() => dispatch({ type: "CLEAR" })}>
        <img
          className="home-img"
          src="https://www.askinclinic.co.uk/wp-content/uploads/2016/06/IPL.jpg"
          alt="Woman with Face Cream"
        />
      </Link>
    </div>
  );
};
