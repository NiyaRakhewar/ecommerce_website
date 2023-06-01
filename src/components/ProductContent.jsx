import React, { useContext } from 'react'
// import {HomeContext} from "../context/HomeContext"
import { FaRegHeart, FaShoppingCart} from "react-icons/fa";
import { ProductListContext } from '../context/ProductListContext';
import { AddingToCart } from './AddingToCart';
import { AddingToWishlist } from './AddingToWishlist';
export const ProductContent = () => {

  const { state } = useContext(ProductListContext);


    const eachCategory = state.selectedCategory  === "All" ? state.product : state.product.filter((item) => item.product_category === state.selectedCategory )


    const filterRating = state.rating !== 0 ? eachCategory.filter((item) => item.product_rating 
    >= state.rating) :  eachCategory

    const filterCheckbox = state.selectedType.length === 0
    ? filterRating
    : filterRating.filter((item) => state.selectedType.includes(item.product_category));

    
    const filterRange = state.range === 1000 ? filterCheckbox: filterCheckbox.filter((item) => item.product_price <= state.range)


    const sortByPrice = (state.sortValue === "LowToHigh") ? filterRange.sort((a,b)=> a.product_price - b.product_price) : (state.sortValue === "HighToLow") ? filterRange.sort((a,b)=> b.product_price - a.product_price)  : filterRange 

  return (
    <div>
    {filterRange.length === 0? <h1> No products found within the selected filter.</h1>: 
    <ul className='product-page-ul'>
       <h3>Products: {filterRange.length}</h3>
          {sortByPrice?.map((product)=> {
               const {_id, product_name, product_url, product_type, product_category, product_price, product_rating} = product
               return (<div key={product_name} className='prod-div'>
              <li key={_id}  className='product-page-li'>
                         <img  alt="img" src={product_url}/>                 
                           <AddingToWishlist product={product} />
                           <h3>{product_name}</h3>
                           <p>{product_type}</p>
                           <p>{product_rating} ⭐ </p>
                           <p>{product_category}</p>
                           <p className='price-tag'>₹ {product_price}</p>
                           <AddingToCart product={product}/>
         </li>
         
               </div>)
           })}
          </ul>}
     </div>
  )
}
