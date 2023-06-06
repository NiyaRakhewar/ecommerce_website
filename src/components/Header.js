import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { FaRegHeart, FaUser, FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import "../components/styles/Header.css";
import { AuthContext } from "../context/AuthContext";
import { ProductListContext } from "../context/ProductListContext";

export const Header = () => {
  const { state, dispatch } = useContext(ProductListContext);
  const { token } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            {" "}
            <img
              alt="img"
              src="https://template.hasthemes.com/theface/theface-v3/assets/images/logo-white.png"
            />
          </Link>
        </div>

        <div className="header-search-container">
          <Search />
        </div>

        <div className="header-icons-container">
          <div className="header-explore">
            <Link to="/productpage" onClick={() => dispatch({ type: "CLEAR" })}>
              {" "}
              <button
                className="explore-button"
                onClick={() =>
                  dispatch({ type: "EACH_CATEGORY", payload: "All" })
                }
              >
                {/* onClick={() => dispatch({ type: "CLEAR" })} */} Explore{" "}
              </button>
            </Link>
          </div>

          <div className="header-profile">
            {token ? (
              <Link to="/profile/details">
                <FontAwesomeIcon
                  icon={faUser}
                  size="xl"
                  style={{ color: "white" }}
                  className="header-profile-icon"
                />
              </Link>
            ) : (
              <Link to="/login">
                <button className="profile-button">Login</button>
              </Link>
            )}
          </div>

          <div className="header-wishlist-div">
            <Link to="/wishList" className="icon-wrapper">
              {state.wishlist.length > 0 && token && (
                <div className="wishlist-length">{state.wishlist.length}</div>
              )}
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                style={{ color: "white" }}
                className="wishlist-icon"
              />
            </Link>
          </div>

          <div className="header-cart-div">
            <Link to="/cart" className="icon-wrapper">
              {state.cart.length > 0 && token && (
                <div className="cart-length">{state.cart.length}</div>
              )}
              <FontAwesomeIcon
                icon={faCartShopping}
                size="xl"
                style={{ color: "white" }}
                className="cart-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
