import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import "../styles/Checkout.css";
import { useNavigate } from "react-router";
export const Checkout = () => {
  const { state, dispatch } = useContext(ProductListContext);

  const navigate = useNavigate();

  const totalItems = state.cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="topToBody checkout-outer-container"
    >
      <h2 style={{ textAlign: "left" }}>Address Details : </h2>
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   alignContent: "space-between",
        //   justifyContent: "space-between",
        //   marginleft: "400px",
        //   gap: "2rem",
        // }}
        className="checkout-address-container"
      >
        <div className="address-list">
          {state.addressList.map((item, i) => (
            <div
              // style={{ minWidth: "300px", height: "180px" }}
              key={i}
              className="checkout-address-box"
            >
              <input
                // style={{ width: "30px", marginTop: "-130px" }}
                type="radio"
                name="address"
                value={item.id}
                checked={state.selectedAddressId === item.id}
                onChange={(e) =>
                  dispatch({
                    type: "SELECTED_ADDRESS",
                    payload: item.id,
                  })
                }
              />
              <label htmlFor="" className="address-label">
                <h2>{item.name}</h2>
                <p style={{ marginTop: "-10px" }}>
                  <strong>Address: </strong> {item.address},{item.city},{" "}
                  {item.state}
                </p>

                <p style={{ marginTop: "-10px" }}>
                  <strong>Mobile: </strong> {item.mobile}
                </p>
              </label>
            </div>
          ))}
        </div>
        <div className="checkout-box-container">
          <div className="checkout-box">
            <h3 className="text-align-center">Order Details</h3>

            <hr className="cart-price-details-hr" />

            <div>
              <li>
                <ul className="order-header">
                  <p className="items">Items</p>
                  <p className="qty">Quantity</p>
                </ul>
              </li>
              <li>
                {state.cart.map(({ product_name, qty }, i) => (
                  <ul key={i}>
                    <p>{product_name}</p>
                    <p>{qty}</p>
                  </ul>
                ))}
              </li>
            </div>
            <h4 className="text-align-center border-header">Price Details</h4>
            <div className="checkout-calculate">
              <li>
                <ul>
                  <p>Price ({totalItems} items)</p>
                  <p>₹ {state.totalBill}</p>
                </ul>
                <ul>
                  <p>Discount</p>
                  <p>-₹ 50</p>
                </ul>
                <ul>
                  <p>Shipping Charges</p>
                  <p>₹100</p>
                </ul>
              </li>
            </div>
            <ul>
              <h4>Total Amount</h4>
              <h4>₹ {state.totalBill - 50 + 100}</h4>
            </ul>

            <div className="text-center">
              <button onClick={() => navigate("/profile/ordersummary")}>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
