import React, { useContext } from 'react'
import { ProductListContext } from '../../context/ProductListContext'
import { RemoveFromWishlist } from '../RemoveFromWishlist'
import { AddingToCart } from '../AddingToCart'
import { Link } from 'react-router-dom'

export const Wishlist = () => {
  const {state} = useContext(ProductListContext)

  console.log("map cart", state.cart)
  return (
    <div>
     <div>
     <h2>{state.wishlist.length === 0 ? "Your Wishlist Is Empty":`Wishlist Items: ${state.wishlist.length}`}</h2>
     </div>
     <div>
     {state.wishlist.map((product)=>
     
     {
      const {_id, product_name, product_url, product_type, product_category, product_price, product_rating} = product
      return (<div key={product_name} className='prod-div'>
     <li key={_id}  className='product-page-li'>
     <Link to={`/productinfopage/${_id}`} className='product-page-li'>
                <img  alt="img" src={product_url}/>                 
                  <h3>{product_name}</h3>
                  <p>{product_type}</p>
                  <p>{product_rating} ⭐ </p>
                  <p>{product_category}</p>
                  <p className='price-tag'>₹ {product_price}</p>
                </Link>
                
                <RemoveFromWishlist product={product}/>
                <AddingToCart product={product}/>
</li>

      </div>)
  })}
     </div>
    </div>
  )
}