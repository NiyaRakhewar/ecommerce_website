import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart, FaShoppingCart} from "react-icons/fa";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { ProductListContext } from '../context/ProductListContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const AddingToWishlist = ({product}) => {

    const { state, dispatch } = useContext(ProductListContext);

    const wishlistClickHandler = async () =>{

      toast("Added To Wishlist!")

        const response = await fetch("/api/user/wishlist", {
            method: "POST",
            headers: {
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({product}),
          })
        const data = await response.json()

        dispatch({type: "ADD-TO-WISHLIST", payload: data.wishlist})

    }

    const wishlistProduct = state.wishlist.some((item)=> item._id === product._id)


  return (
    <div>
        { wishlistProduct ? <Link to={"/wishlist"}><button ><FontAwesomeIcon icon={faHeart} size="l" style={{color: "red"}} /></button></Link>:<div><button onClick={wishlistClickHandler}> <FaRegHeart /></button><ToastContainer /></div>}
    </div>
  )
}