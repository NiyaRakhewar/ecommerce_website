import React, { useContext } from 'react'
import { ProductListContext } from '../context/ProductListContext'

export const RemoveFromCart = ({product}) => {

    const { state, dispatch } = useContext(ProductListContext) 

    const removeClickHandler = async () =>{

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
        <button onClick={removeClickHandler}>Remove From Cart</button>
    </div>
  )
}
