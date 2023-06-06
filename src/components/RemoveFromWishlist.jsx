import React, { useContext } from "react";
import { ProductListContext } from "../context/ProductListContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export const RemoveFromWishlist = ({ product }) => {
  toast("Removed From Wishlist !!");

  const { dispatch } = useContext(ProductListContext);

  const removeClickHandler = async () => {
    toast.warning("Removed from  Wishlist", {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const response = await fetch(`/api/user/wishlist/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ product }),
    });
    const data = await response.json();

    console.log("remove data", data);

    // const filteredData = state.cart.filter((item)=> item._id !== product._id)
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: data.wishlist });
  };
  return (
    <div
      style={{
        position: "absolute",
        marginTop: "-327px",
      }}
    >
      <button onClick={removeClickHandler}>
        <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      </button>
    </div>
  );
};
