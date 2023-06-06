// import React, { useContext } from "react";
import { Categories } from "../Categories";
import { PageInformation } from "../PageInformation";
// import { ProductListContext } from "../../context/ProductListContext";
import ".././styles/Home.css";
export const Home = () => {
  // const { state } = useContext(ProductListContext);
  return (
    <div className="content">
      <PageInformation />
      <Categories />
    </div>
  );
};
