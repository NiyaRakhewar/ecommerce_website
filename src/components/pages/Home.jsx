import React, { useContext } from "react";
import { Footer } from "../Footer";
import { Categories } from "../Categories";
import { PageInformation } from "../PageInformation";
import { ProductListContext } from "../../context/ProductListContext";

export const Home = () => {
  // const { state } = useContext(ProductListContext);
  return (
    <div className="content">
      <PageInformation />
      <Categories />
    </div>
  );
};














// import React, {useContext} from 'react'
// import { FaRegHeart, FaUser, FaShoppingCart} from "react-icons/fa";
// import { Link } from 'react-router-dom'
// import { HomeContext } from '../../context/HomeContext';
// export const Home = () => {

//     const { state, dispatch } = useContext(HomeContext)

//     const searchedList = state.product.filter(({product_name})=> product_name.toLowerCase().includes(state.searchValue.toLowerCase()))

//     // console.log("home", state.category)
//   return (
//      <div className="App-home">
//       <header className='home-header'>
//       <Link to="/"> <img
//           alt="img"
//           src="https://template.hasthemes.com/theface/theface-v3/assets/images/logo-white.png"
//         /></Link>
       
//        <div>
       
//        <div className='search_bar'>
//        <input type="search" placeholder='type here...' onChange={(e)=> dispatch({type: "SEARCH_DATA", payload: e.target.value})}/>

//        </div>
//        <Link  to = "/wishlist"> <button className='icon'><FaRegHeart />Wishlist  
//         </button></Link>

//          <Link to ="/cart"> <button className='icon'><FaShoppingCart/> Cart</button></Link>

//          <Link to="/login"> <button className='icon'><FaUser />Login</button></Link> 


//         </div>
//       </header>

//     <div className='search_main'>

//     {state.searchValue && 
    
//     <div className='search_products'>

// { searchedList.length === 0 ? <p>No product found</p> : searchedList.map(({_id, product_name, product_url, product_price})=> <div className="search_item" key={_id}>
// <img className="search_img" alt="" src={product_url}/>
// <h3>{product_name}</h3>
// <p>{product_price}</p>
// </div>)}
// </div> }
// </div>

//       <body className="my_web_body">
//         <div className="my_web_div">
//        <div className='bg-img'>
//        <img className='home-img'
//             src="https://www.askinclinic.co.uk/wp-content/uploads/2016/06/IPL.jpg"
//             alt="Woman with Face Cream"
//           />
//          <Link to="/productpage"> <button className='all-list' onClick={()=> dispatch({type: "EACH_CATEGORY", payload: "All"})}> Explore </button></Link>
//        </div>
          
// <div className='category'>

//     {
//         state.category.map((item) =><div onClick={()=>dispatch({type: "EACH_CATEGORY" , payload: item.categoryName})}>
//        <Link to={"/productPage"}> <img className={item.categoryName} alt='img' src={item.categoryImage}/>
//       <h3 className='category-h3' > {item.categoryName.toUpperCase()}  </h3></Link>
        
//         </div> )
//     }

//         </div>
//         </div>
//       </body>
//     </div>
//   )
// }
