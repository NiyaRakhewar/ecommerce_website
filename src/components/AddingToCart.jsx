import React, { useContext } from "react";
import { ProductListContext } from "../context/ProductListContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";
import "./styles/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const AddingToCart = ({ product }) => {
  const { state, dispatch } = useContext(ProductListContext);

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const cartClickHandler = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      toast("Added To Cart !!", {
        position: "bottom-right",
        // theme: "solid",
      });

      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ product }),
      });
      const data = await response.json();

      dispatch({ type: "ADD-TO-CART", payload: data.cart });
    } catch (err) {
      // toast.error("Please login to add item to cart");
    }
  };

  const cardProduct = state.cart.some((item) => item._id === product._id);

  return (
    <div className="card-footer-elements">
      {cardProduct && token ? (
        <Link to={"/cart"}>
          <button style={{ backgroundColor: " rgb(54, 150, 81)" }}>
            Go To Cart{" "}
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              style={{ color: "white" }}
            />
          </button>
        </Link>
      ) : (
        <button onClick={cartClickHandler}>
          Add To Cart{" "}
          <FontAwesomeIcon
            icon={faCartShopping}
            size="xl"
            style={{ color: "white" }}
          />
          <ToastContainer />
        </button>
      )}
    </div>
  );
};
