import React, { useContext } from 'react'
import { ProductListContext } from '../context/ProductListContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const RemoveFromCart = ({product}) => {

    const { dispatch } = useContext(ProductListContext) 

    const removeClickHandler = async () =>{

      toast("Removed Item From Cart !!")

    const response = await fetch(`/api/user/cart/${product._id}`,{
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({product}),
      })
    const data = await response.json()

    console.log("remove data", data.cart)

        // const filteredData = state.cart.filter((item)=> item._id !== product._id)
        dispatch({type:'REMOVE_FROM_CART', payload: data.cart})

    }  
  return (
    <div>
        <button onClick={removeClickHandler}>Remove From Cart<ToastContainer /></button>
    </div>
  )
}
