import React from "react";
import { Sidebar } from "../Sidebar";
import { ProductContent } from "../ProductContent";
import "../styles/ProductPage.css";
import "../styles/Products.css";
export const ProductPage = () => {
  return (
    <div className="productlist-content">
      <Sidebar />
      <ProductContent />
    </div>
  );
};
