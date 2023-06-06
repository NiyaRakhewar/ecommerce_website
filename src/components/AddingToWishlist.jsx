import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ProductListContext } from "../context/ProductListContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";
import "./styles/Products.css";
export const AddingToWishlist = ({ product }) => {
  const { state, dispatch } = useContext(ProductListContext);

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const wishlistClickHandler = async () => {
    token &&
      toast.success("Successfully added to Wishlist", {
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

      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ product }),
      });
      const data = await response.json();

      dispatch({ type: "ADD-TO-WISHLIST", payload: data.wishlist });
    } catch (err) {
      // toast.error("Please login to add item to cart");
    }
  };

  const wishlistProduct = state.wishlist.some(
    (item) => item._id === product._id
  );

  return (
    <div className="food-content-wishlist">
      {wishlistProduct ? (
        <div>
          {/* <Link to={"/wishlist"}> */}
          <button
            className="food-content-wishlist"
            onClick={() => navigate("/wishlist")}
          >
            <FontAwesomeIcon
              className="cart-wishlist-btn"
              icon={faHeart}
              size="xl"
              style={{ color: "red" }}
            />
          </button>
          {/* </Link> */}
        </div>
      ) : (
        <div>
          <button
            className="food-content-wishlist"
            onClick={wishlistClickHandler}
          >
            {" "}
            <FontAwesomeIcon
              className="cart-wishlist-btn"
              icon={faHeart}
              size="xl"
              style={{ color: "white" }}
            />
            <ToastContainer />
          </button>
        </div>
      )}
    </div>
  );
};
