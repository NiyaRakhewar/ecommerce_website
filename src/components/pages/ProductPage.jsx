
import React from "react";
import { Sidebar } from "../Sidebar";
import { ProductContent } from "../ProductContent";

export const ProductPage = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <ProductContent />
    </div>
  );
};
























// import React, { useContext} from 'react'
// // import { Link } from 'react-router-dom'
// import { FaRegHeart, FaShoppingCart} from "react-icons/fa";

// import { ProductListContext } from '../../context/ProductListContext';
// export const ProductPage = () => {

//   const { state, dispatch } = useContext(ProductListContext);

// console.log("state", state)


//     const eachCategory = state.selectedCategory  === "All" ? state.product : state.product.filter((item) => item.product_category === state.selectedCategory )


//     const filterRating = state.rating !== 0 ? eachCategory.filter((item) => item.product_rating 
//     >= state.rating) :  eachCategory

//     const filterCheckbox = state.selectedType.length === 0
//     ? filterRating
//     : filterRating.filter((item) => state.selectedType.includes(item.product_category));

//     // const filterCheckbox = selectedType ? filterRating.filter((item)=> selectedType.includes(item.product_category)) : filterRating 
    
//     const filterRange = state.range === 1000 ? filterCheckbox: filterCheckbox.filter((item) => item.product_price <= state.range)


//     // const sortByPrice = (sortValue === "LowToHigh") ? filterRange.sort((a,b)=> a.product_price - b.product_price) : (sortValue === "HighToLow") ? filterRange.sort((a,b)=> b.product_price - a.product_price)  : filterRange 

//     const sortByPrice = (state.sortValue === "LowToHigh") ? filterRange.sort((a,b)=> a.product_price - b.product_price) : (state.sortValue === "HighToLow") ? filterRange.sort((a,b)=> b.product_price - a.product_price)  : filterRange 


//     const searchedList = sortByPrice.filter(({product_name})=> product_name.toLowerCase().includes(state.searchValue.toLowerCase()))

//     const changeHandlerForType = (e) => {
//       const type = e.target.value;
//       const isChecked = e.target.checked;

     
//         if (isChecked) {
    
//           return dispatch({type: "SELECTED_TYPE", payload: [...state.selectedType, type]});
//         } else {
    
//           return dispatch( {type: "SELECTED_TYPE", payload: state.selectedType.filter((t) => t !== type)});
//         }
      
//     }; 

    
//   return (
//     <div className='App-home'>

// {/* <header className='home-header'>
//       <Link to="/"> <img
//           alt="img"
//           src="https://template.hasthemes.com/theface/theface-v3/assets/images/logo-white.png"
//         /></Link>
       
//         <div>
       
//        <div className='search_bar'>
//        <input type="search" placeholder='type here...' onChange={(e)=> dispatch({type: "SEARCH_DATA", payload: e.target.value})}/>


//        </div>
        
        
//          <Link  to = "/wishlist"><button className='icon'><FaRegHeart />Wishlist</button></Link>
//          <Link to ="/cart"> <button className='icon'><FaShoppingCart/> Cart</button></Link>
//          <Link to="/login"> <button className='icon'><FaUser />Login</button></Link>
//         </div>
//       </header> */}


//       <div className='search_main'>
        
//         {state.searchValue && 
        
//         <div className='search_products'>
    
//     { searchedList.length === 0 ? <p>No product found</p> : searchedList.map(({_id, product_name, product_url, product_price})=> <div className="search_item" key={_id}>
//     <img className="search_img" alt="" src={product_url}/>
//     <h3>{product_name}</h3>
//     <p>{product_price}</p>
//     </div>)}
//     </div> }</div>
//       <body>
        
    
//     <div className='main'>
//     <div className='aside-products'>
//             <div className="productlist-aside" style={{textAlign: "left"}}>
              
//                 <div className='form'>
//                     <h4>FILTERS</h4>
//                     <button onClick={()=> dispatch({type: "CLEAR"})} > CLEAR
//                     </button>
//                 </div>
               
//                 <div >
//                 <hr />
//                 <div className='range-price'>
//                 <p>0</p>
//                 <p>500</p>
//                 <p>1000</p>
//                 </div>
//                 <input  className='range-price-slider' type="range" name='rangeInput' min="0" max="1000" value={state.range} onChange={(e)=>dispatch({type: "CHANGE_RANGE", payload: e.target.value})}/>
//                 </div>

//         <div>
               
//         <h3> Category </h3>
//                 {
                  
//                   state.category?.map((item) => <li key={item._id}>
//                   <input type='checkbox' value={item.categoryName} checked={state.selectedType.includes(item.categoryName)} onChange={ changeHandlerForType }/>
//                <label>{item.categoryName}</label>
//                   </li>)
//                 }
//         </div>
       
//           <div >
//           <h3>Rating</h3>
//        <div >
//        <input id="5" type='radio' name='rating' value={5} checked={state.rating === 5} onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})}/>
//               <label htmlFor="5"> 5 stars </label>
//        </div>
//        <div>
//        <input id="4" type='radio'  name='rating' value={4} checked={state.rating === 4}onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})} />
//               <label htmlFor="4"> 4 stars and above</label>
//        </div >
//        <div>
//        <input id="3" type='radio'  name='rating' value={3}  checked={state.rating === 3}onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})} />
//               <label htmlFor="3"> 3 stars and above</label>
//        </div>
//        <div >
//        <input id="2" type='radio' name='rating' value={2} checked={state.rating === 2} onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})}/>
//             <label htmlFor="2" > 2 stars and above</label>
//        </div>
//        <div>
//        <input id="1" type='radio'  name='rating' value={1} checked={state.rating === 1} onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})}/>
//             <label htmlFor="1" > 1 stars and above</label>
//        </div>
          
//           </div>
//           <div>
// <h4>Sort by Price</h4>
// <div>
//        <input id="1" type='radio'  name='by-price' value="HighToLow" checked={state.sortValue === "HighToLow" } onChange={(e)=> dispatch({type: "SORT_BY_HIGHTOLOW", payload: e.target.value})} />
//         <label for="1" > High-To-Low </label>
//        </div>

//        <div>
//        <input id="1" type='radio' name='by-price' value="LowToHigh" checked={state.sortValue === "LowToHigh" } onChange={(e)=> dispatch({type: "SORT_BY_LOWTOHIGH", payload: e.target.value})} />
//         <label for="1" > Low-To-High </label>
//        </div> 
//        {/* <div>
//        <input id="1" type='radio'  name='by-price' value="HighToLow" checked={sortValue === "HighToLow" } onChange={(e)=> setValue(e.target.value)} />
//               <label for="1" > High-To-Low </label>
//        </div>

//        <div>
//        <input id="1" type='radio' name='by-price' value="LowToHigh" checked={sortValue === "LowToHigh" } onChange={(e)=> setValue(e.target.value)} />
//               <label for="1" > Low-To-High </label>
//        </div> */}

//           </div>

//             </div>
//             <div>
//  {filterRange.length === 0? <h1>No products found within the selected filter.</h1>: <ul className='product-page-ul'>
//     <h3>Products: {filterRange.length}</h3>
//        {sortByPrice.map((product)=> {
//             const {_id, product_name, product_url, product_type, product_category, product_price, product_rating} = product

//             return (<div className='prod-div'>
//                 <li key={_id} className='product-page-li'>
//                       <img  alt=" " src={product_url}/>                 
//          <div><button className='icon'><FaRegHeart /></button></div>
//                         <h3>{product_name}</h3>
//                         <p>{product_type}</p>
//                         <p>{product_rating} ⭐ </p>
//                         <p>{product_category}</p>
//                         <p className='price-tag'>₹ {product_price}</p>
//                         <button><FaShoppingCart /> Add to Cart</button>
      
//             </li>
//             </div>)
//         })}
//        </ul>}
//   </div>
//         </div>

//     </div>
//       </body>
//     </div>
//   )
// }
