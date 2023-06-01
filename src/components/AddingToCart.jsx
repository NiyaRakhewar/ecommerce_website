import React, { useContext } from 'react'
import { FaRegHeart, FaShoppingCart} from "react-icons/fa";
import { ProductListContext } from '../context/ProductListContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const AddingToCart = ({product}) => {

    const { state, dispatch } = useContext(ProductListContext);

    const cartClickHandler = async () =>{

      toast("Added To Cart !!")

        const response = await fetch("/api/user/cart", {
            method: "POST",
            headers: {
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({product}),
          })
        const data = await response.json()

        dispatch({type: "ADD-TO-CART", payload: data.cart})

    }

    const cardProduct = state.cart.some((item)=> item._id === product._id)


  return (
    <div>
        { cardProduct ? <Link to={"/cart"}><button style={{backgroundColor: "blue"}}>Go to Cart <FaShoppingCart /></button></Link>:<button onClick={cartClickHandler}>Add to Cart <FaShoppingCart />  <ToastContainer /></button>}
    </div>
  )
}
