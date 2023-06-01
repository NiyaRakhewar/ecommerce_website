import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FaRegHeart, FaUser, FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Search } from "./Search";


import { AuthContext } from "../context/AuthContext";
import { ProductListContext } from "../context/ProductListContext";

export const Header = () => {
  const { state, dispatch } = useContext(ProductListContext);
  const { token } = useContext(AuthContext);

  return (
   <div>
   
     <div className="header">
     <div>
     <FontAwesomeIcon
        onClick={() => dispatch({ type: "SIDEBAR_ACTIVE" })}
        icon={faBars}
        style={{ color: "white", cursor: "pointer" }}
        size="xl"
      />

    <Link to="/"> <img
          alt="img"
          src="https://template.hasthemes.com/theface/theface-v3/assets/images/logo-white.png"
        /></Link>
     </div>

      <Search />



    <div className="user-auth-icon">

   
  <div>
  <Link to="/productpage"> <button style={{backgroundColor: "white"}}className='all-list' onClick={()=> dispatch({type: "EACH_CATEGORY", payload: "All"})}> Explore </button></Link>
   
  </div>

     <div>
     {token ? (
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} size="xl" style={{color: "white"}} />
          </Link>
        ) : (
          <Link to="/login"><button style={{backgroundColor: "white"}}>Login</button></Link>
        )}
     </div>

      <div className="count">
      <Link to="/wishList" className="cart-icon-wrapper">
      {state.wishlist.length > 0 && token && (
            <div className="wishlist-length">{state.wishlist.length}</div>
          )}
      <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "white"}} />
        </Link>
      </div>

     <div className="count">
     <Link to="/cart" className="cart-icon-wrapper">
          {state.cart.length > 0 && token && (
            <div className="cart-length">{state.cart.length}</div>
          )}
          <FontAwesomeIcon icon={faCartShopping} size="xl"  style={{color: "white"}}/>
        </Link>
     </div>

      </div>
    </div>
   </div>
  );
};