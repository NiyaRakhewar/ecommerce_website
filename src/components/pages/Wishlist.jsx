import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import { RemoveFromWishlist } from "../RemoveFromWishlist";
import { AddingToCart } from "../AddingToCart";
import { Link } from "react-router-dom";
import "../styles/Wishlist.css";
import { ToastContainer } from "react-toastify";
export const Wishlist = () => {
  const { state } = useContext(ProductListContext);

  console.log("map cart", state.cart);
  return (
    <>
      <ToastContainer />
      {state.wishlist.length === 0 ? (
        <div className="topToBody empty-wishlist">
          {/* <img src={"emptyWishlist"} alt="" /> */}
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
                      <AddingToCart product={product} />
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
