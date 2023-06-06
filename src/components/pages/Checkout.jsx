import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";

export const Checkout = () => {
  const { state, dispatch } = useContext(ProductListContext);
  return (
    <div>
      <div>
        <div className="address-checkout-div">
          <div>
            <h1>Address Details</h1>
          </div>
          {state.addressList.map((item) => (
            <div key={item.id}>
              <div>
                <label h>
                  <input
                    type="radio"
                    name="address"
                    value={item.id}
                    checked={state.selectedAddressId === item.id}
                    onChange={(e) =>
                      dispatch({
                        type: "SELECTED_ADDRESS",
                        payload: item.id,
                      })
                    }
                  />
                  <div>
                    <h2>{item.name}</h2>
                    <p>
                      <strong>Address: </strong> {item.address}
                    </p>
                    <p>
                      <strong>Pincode: </strong> {item.pincode}
                    </p>
                    <p>
                      <strong>City: </strong> {item.city}
                    </p>
                    <p>
                      <strong>Mobile: </strong> {item.mobile}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="price-details-checkout-div">
          <h2>Price Details</h2>
          <hr />
          <div>
            <p>Price(item) </p> <p>₹ {state.totalBill}</p>
          </div>
          <div>
            <p>Discount</p>
            <p>-₹ 50</p>
          </div>
          <div>
            <p>Shipping Charges</p>
            <p>₹ 100</p>
          </div>
          <hr />
          <div>
            <p>
              <strong>Total Price</strong>
            </p>
            <p>₹ {state.totalBill - 50 + 100}</p>
          </div>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};
