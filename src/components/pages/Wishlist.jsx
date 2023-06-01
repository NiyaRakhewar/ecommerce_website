import React, { useContext } from 'react'
import { ProductListContext } from '../../context/ProductListContext'
import { RemoveFromWishlist } from '../RemoveFromWishlist'

export const Wishlist = () => {
  const {state} = useContext(ProductListContext)

  console.log("map cart", state.cart)
  return (
    <div>
     <div>
     <h2>{state.wishlist.length === 0 ? "Your Wishlist Is Empty":`Wishlist Items: ${state.wishlist.length}`}</h2>
     </div>
     <div>
     {state.wishlist.map((product)=><div>
        <h2>{product.product_name}</h2>
        <RemoveFromWishlist product={product}/>
      </div>)}
     </div>
    </div>
  )
}