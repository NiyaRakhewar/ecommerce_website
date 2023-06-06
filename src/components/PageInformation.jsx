// import React, { useContext } from 'react'
// import { ProductListContext } from '../context/ProductListContext';
import { Link } from "react-router-dom";

export const PageInformation = () => {
  // const {  dispatch } = useContext(ProductListContext);

  return (
    <div className="home-page-container">
      <Link to="/productpage">
        <img
          className="home-img"
          src="https://www.askinclinic.co.uk/wp-content/uploads/2016/06/IPL.jpg"
          alt="Woman with Face Cream"
        />
      </Link>
    </div>
  );
};
