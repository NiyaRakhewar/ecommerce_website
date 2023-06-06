import React, { useContext } from "react";
import { ProductListContext } from "../../../context/ProductListContext";

export const OrderSummary = () => {
  const { state } = useContext(ProductListContext);
  let total = 0;
  total = total + state.totalBill;
  return (
    <div className="order-summary-container">
      <h3>Previous Order Bill Amount : ₹ {total}</h3>
    </div>
  );
};
