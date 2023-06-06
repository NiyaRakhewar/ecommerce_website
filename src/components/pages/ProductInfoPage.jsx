import React, { useContext } from 'react'
import { ProductListContext } from '../../context/ProductListContext'
import { useParams } from 'react-router'
import { AddingToWishlist } from '../AddingToWishlist'
import { AddingToCart } from '../AddingToCart'

export const ProductInfoPage = () => {

    const { state } =useContext(ProductListContext)

    const { id } = useParams()

    const productInfo = state.product.find(({_id})=> id === _id)

    const {_id, product_name, product_price, product_rating, description, size , product_url, product_type, product_category} = productInfo

  return (
    <div>
        <div style={{marginTop: "15px"}}>
        <div key={product_name} className='prod-div'>
              <li key={_id}  className='product-page-li'>
              
                    <div style={{display: "grid", height: "800px", maxWidth: "800px"}}>
                    <div>
                        <img  alt="img" src={product_url} style={{margin: "10px",maxWidth: "300px"}}/>   
                        <AddingToWishlist product={productInfo} />
                        <p>{product_rating} ⭐ </p>     
                     </div>             
                     
                     <div style={{maxWidth: "550px"}}>
                           <h3>{product_name}</h3>
                           <p className='price-tag'>₹ {product_price}</p>
                           <p><strong>Type: </strong>  {product_type}</p>
                           <p><strong>Category: </strong>  {product_category}</p>
                           <p><strong>Description:</strong>  {description}</p>
                           <p><strong>Size:</strong>  {size}</p>
                           <AddingToCart product={productInfo}/>
                     </div>
                    </div>
         </li>
         
               </div>
        </div>
       
    </div>
  )
}
