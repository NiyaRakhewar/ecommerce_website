import React, { useContext } from 'react'
import { ProductListContext } from '../../context/ProductListContext'
import { RemoveFromCart } from '../RemoveFromCart'

export const Cart = () => {
  const {state} = useContext(ProductListContext)

  console.log("map cart", state.cart)
  return (
    <div>
     <div>
     <h2>{state.cart.length === 0? "Your Cart Is Empty":`Cart Items: ${state.cart.length}`}</h2>
     </div>
     <div>
     {state.cart.map((product)=><div>
        <h2>{product.product_name}</h2>
        <RemoveFromCart product={product}/>
      </div>)}
     </div>
    </div>
  )
}
