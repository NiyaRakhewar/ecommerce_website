import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import { RemoveFromCart } from "../RemoveFromCart";
import { AddingToWishlist } from "../AddingToWishlist";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../styles/Cart.css";
export const Cart = () => {
  const { state, dispatch } = useContext(ProductListContext);

  const navigate = useNavigate();

  const totalBill = state.cart.reduce(
    (acc, curr) => acc + Number(curr.product_price * curr.qty),
    0
  );

  state.totalBill = totalBill;

  return (
    <>
      <ToastContainer />
      {state.cart.length === 0 ? (
        <div className="topToBody empty-cart">
          {/* <img src={emptyCart} alt="" /> */}
          <h1>Your Cart is Empty</h1>
        </div>
      ) : (
        <div className="topToBody cart-container">
          <div className="cart-container-header">
            <h3>MY CART ({state?.cart?.length})</h3>
          </div>
          <div className="cart-content-container">
            <div className="all-cart-cards">
              <div className="cart-card">
                {state?.cart?.map((product) => {
                  const { _id, product_name, product_url, product_price, qty } =
                    product;
                  return (
                    <div key={_id} className="cart-content">
                      <div className="image-container">
                        <img
                          alt="imageCart"
                          src={product_url}
                          onClick={() => navigate(`/productinfopage/${_id}`)}
                        />
                        <div className="wishlist-container">
                          <AddingToWishlist product={product} />
                        </div>
                      </div>

                      <div className="cart-item-information">
                        <div className="cart-item-information-container">
                          <h3>{product_name}</h3>
                          <p className="price"> {product_price}</p>
                          <div className="quantity">
                            <p>Quantity:</p>
                            <div className="quantity-btn">
                              <button
                                className={qty === 1 && "decrement-button"}
                                onClick={() =>
                                  dispatch({
                                    type: "QUANTITY_DECREMENT_BUTTON",
                                    payload: _id,
                                  })
                                }
                              >
                                -
                              </button>
                              <p className="cart-quantity-number">{qty}</p>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "QUANTITY_INCREMENT_BUTTON",
                                    payload: _id,
                                  })
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <RemoveFromCart product={product} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cart-price-details">
              <h4>
                <strong> CART PRICE DETAILS </strong>
              </h4>
              <hr className="cart-price-details-hr" />

              {state.cart.map((item, i) => (
                <div className="cart-price-item" key={i}>
                  <p>
                    {item.product_name} ({item.qty})
                  </p>
                  <p className="price">{item.product_price * item.qty}</p>
                </div>
              ))}
              <hr />

              <div className="cart-price-item-total-price">
                <p>Total Price: </p>
                <p className="price"> {totalBill}</p>
              </div>

              <div className="checkout-button">
                <Link to={"/checkout"}>
                  <button>CHECKOUT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
