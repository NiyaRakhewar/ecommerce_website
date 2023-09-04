import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import { RemoveFromWishlist } from "../RemoveFromWishlist";
// import { AddingToCart } from "../AddingToCart";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Wishlist.css";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
export const Wishlist = () => {
  const { state, dispatch } = useContext(ProductListContext);

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleAddToCart = async (product) => {
    token &&
      toast.success("Successfully added to the cart", {
        autoClose: 1000,
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    try {
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });

      const data = await response.json();

      dispatch({ type: "ADD-TO-CART", payload: data.cart });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleIncreaseCartQuantity = (_id) => {
    dispatch({ type: "QUANTITY_INCREMENT_BUTTON", payload: _id });
    token &&
      toast.success("Quanity increased by 1", {
        autoClose: 1000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  };

  return (
    <>
      <ToastContainer />
      {state.wishlist.length === 0 ? (
        <div className="topToBody empty-wishlist">
          <h1>Your Wishlist is empty</h1>
        </div>
      ) : (
        <div className="main-wishlist">
          <h3>Wishlist Items ( {state.wishlist.length} )</h3>
          <div className="topToBody wishlist-card">
            {state.wishlist.map((product, i) => {
              const {
                _id,
                product_name,
                product_url,
                product_type,
                product_price,
              } = product;

              const btnText = state.cart.find((item) => item._id === _id)
                ? "Increase cart quantity"
                : "Add to cart";

              return (
                <div key={i} className="product-card">
                  <Link
                    to={`/productinfopage/${_id}`}
                    className="product-items"
                  >
                    <img alt="img" src={product_url} />
                    <div className="details">
                      <div className="description">
                        <h3>{product_name}</h3>
                        <p>{product_type}</p>
                      </div>

                      <div className="price-container">
                        <h3 className="price">{product_price}</h3>
                      </div>
                    </div>
                  </Link>

                  <div className="btn">
                    <div className="remove-wishlist">
                      <RemoveFromWishlist product={product} />
                    </div>
                    <div className="add-cart">
                      <button
                        style={
                          btnText === "Increase cart quantity"
                            ? {
                                backgroundColor: "green",
                              }
                            : {}
                        }
                        onClick={
                          btnText === "Increase cart quantity"
                            ? () => handleIncreaseCartQuantity(_id)
                            : () => handleAddToCart(product)
                        }
                      >
                        {btnText}
                      </button>
                      {/* <AddingToCart product={product} /> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
