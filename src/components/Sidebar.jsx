import React, { useContext } from 'react'
import { ProductListContext } from '../context/ProductListContext';

export const Sidebar = () => {

    const { state, dispatch } = useContext(ProductListContext);

    const changeHandlerForType = (e) => {
        const type = e.target.value;
        const isChecked = e.target.checked;
  
       
          if (isChecked) {
      
            return dispatch({type: "SELECTED_TYPE", payload: [...state.selectedType, type]});
          } else {
      
            return dispatch( {type: "SELECTED_TYPE", payload: state.selectedType.filter((t) => t !== type)});
          }
        
      }; 

  return (
    <div>
        
        <div className='main'>
    <div className='aside-products'>
            <div className="productlist-aside" style={{textAlign: "left"}}>
              
                <div className='form'>
                    <h4>FILTERS</h4>
                    <button onClick={()=> dispatch({type: "CLEAR"})} > CLEAR
                    </button>
                </div>
               
                <div >
                <hr />
                <div className='range-price'>
                <p>0</p>
                <p>500</p>
                <p>1000</p>
                </div>
                <input  className='range-price-slider' type="range" name='rangeInput' min="0" max="1000" value={state.range} onChange={(e)=>dispatch({type: "CHANGE_RANGE", payload: e.target.value})}/>
                </div>

        <div>
               
        <h3> Category </h3>
                {
                  
                  state.category?.map((item) => <li key={item._id}>
                  <input type='checkbox' value={item.categoryName} checked={state.selectedType.includes(item.categoryName)} onChange={ changeHandlerForType }/>
               <label>{item.categoryName}</label>
                  </li>)
                }
        </div>
       
          <div >
          <h3>Rating</h3>
       <div >
       <input id="5" type='radio' name='rating' value={5} checked={state.rating === 5} onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})}/>
              <label htmlFor="5"> 5 stars </label>
       </div>
       <div>
       <input id="4" type='radio'  name='rating' value={4} checked={state.rating === 4}onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})} />
              <label htmlFor="4"> 4 stars and above</label>
       </div >
       <div>
       <input id="3" type='radio'  name='rating' value={3}  checked={state.rating === 3}onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})} />
              <label htmlFor="3"> 3 stars and above</label>
       </div>
       <div >
       <input id="2" type='radio' name='rating' value={2} checked={state.rating === 2} onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})}/>
            <label htmlFor="2" > 2 stars and above</label>
       </div>
       <div>
       <input id="1" type='radio'  name='rating' value={1} checked={state.rating === 1} onChange={(e)=> dispatch({type: "SELECTED_RATINGS", payload: Number(e.target.value)})}/>
            <label htmlFor="1" > 1 stars and above</label>
       </div>
          
          </div>
          <div>
<h4>Sort by Price</h4>
<div>
       <input id="1" type='radio'  name='by-price' value="HighToLow" checked={state.sortValue === "HighToLow" } onChange={(e)=> dispatch({type: "SORT_BY_HIGHTOLOW", payload: e.target.value})} />
        <label htmlFor="1" > High-To-Low </label>
       </div>

       <div>
       <input id="1" type='radio' name='by-price' value="LowToHigh" checked={state.sortValue === "LowToHigh" } onChange={(e)=> dispatch({type: "SORT_BY_LOWTOHIGH", payload: e.target.value})} />
        <label htmlFor="1" > Low-To-High </label>
       </div> 

  </div>

  </div>
   </div>

    </div>
    </div>
  )
}
