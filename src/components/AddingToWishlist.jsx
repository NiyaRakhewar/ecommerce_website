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
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      toast("Added To Wishlist!", {
        position: "bottom-right",
      });

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
    <>
      {wishlistProduct ? (
        <div>
          <Link to={"/wishlist"}>
            <button className="card-img-tag-btn productlist-card-img-tag-btn-container">
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                style={{ color: "red" }}
              />
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <button
            className="card-img-tag-btn productlist-card-img-tag-btn-container"
            onClick={wishlistClickHandler}
          >
            {" "}
            <FontAwesomeIcon
              icon={faHeart}
              size="xl"
              style={{ color: "white" }}
            />
            <ToastContainer />
          </button>
        </div>
      )}
    </>
  );
};
