import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import { RemoveFromCart } from "../RemoveFromCart";
import { AddingToWishlist } from "../AddingToWishlist";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { state, dispatch } = useContext(ProductListContext);

  // const decrementClickHandler = (_id) =>{
  //   const quantity= state.cart.map((item)=> {
  //     if(item._id === action.payload){
  //       return {...item, qty: item.qty - 1}
  //     }
  //     return {item}
  //   })

  //   dispatch(()=> dispatch({type: 'QUANTITY_DECREMENT_BUTTON', payload: quantity}))
  // }

  // const incrementClickHandler = (_id) =>{
  //   const quantity = state.cart.map((item)=> {
  //     if(item._id === _id){
  //       return {...item, qty: item.qty + 1}
  //     }
  //     return {item}
  //   })

  //   dispatch(()=> dispatch({type: 'QUANTITY_INCREMENT_BUTTON', payload: quantity}))
  // }

  const totalBill = state.cart.reduce(
    (acc, curr) => acc + Number(curr.product_price * curr.qty),
    0
  );

  state.totalBill = totalBill;

  console.log("map cart", state.cart);
  console.log("totalBill", totalBill);

  return (
    <div>
      <div>
        <h2>
          {state.cart.length === 0
            ? "Your Cart Is Empty"
            : `Cart Items: ${state.cart.length}`}
        </h2>
      </div>
      <div>
        {state.cart.map((product) => {
          const { _id, product_name, product_url, product_price, qty } =
            product;
          return (
            <div key={_id} className="prod-div">
              <div className="product-page-li">
                <Link
                  to={`/productinfopage/${_id}`}
                  className="product-page-li"
                >
                  <img alt="img" src={product_url} />
                </Link>
                <AddingToWishlist product={product} />
                <h2>{product_name}</h2>
                <p className="price-tag">₹ {product_price}</p>
                <div>
                  <h3>
                    Quantity:
                    <button
                      className={qty === 1 && "decrement-button"}
                      onClick={() =>
                        dispatch({
                          type: "QUANTITY_DECREMENT_BUTTON",
                          payload: _id,
                        })
                      }
                    >
                      -
                    </button>
                    <button>{qty}</button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "QUANTITY_INCREMENT_BUTTON",
                          payload: _id,
                        })
                      }
                    >
                      +
                    </button>
                  </h3>
                </div>

                <RemoveFromCart product={product} />
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div>
          <h3>
            <strong> CART PRICE DETAILS </strong>
          </h3>
          <hr />
          <div>
            {state.cart.map((item) => (
              <div>
                <h3>
                  {item.product_name} ({item.qty}) ₹{" "}
                  {item.product_price * item.qty}
                </h3>
              </div>
            ))}
          </div>
          <hr />
          <h3>
            <strong>Total Price: ₹ {totalBill} </strong>
          </h3>
          <Link to={"/checkout"}>
            {" "}
            <button>
              <strong>CHECKOUT</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
