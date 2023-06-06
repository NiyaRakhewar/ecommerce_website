import React, { useContext } from "react";
import { ProductListContext } from "../context/ProductListContext";
import { useNavigate } from "react-router";

export const Search = () => {
  const { state, dispatch } = useContext(ProductListContext);

  const navigate = useNavigate();

  const searchedList = state.product.filter(({ product_name }) =>
    product_name.toLowerCase().includes(state.searchValue.toLowerCase())
  );

  return (
    <div className="search_bar">
      <input
        type="search"
        placeholder="type here..."
        onChange={(e) =>
          dispatch({ type: "SEARCH_DATA", payload: e.target.value })
        }
      />
      <div className="search_main">
        {state.searchValue && (
          <div className="search_products">
            {searchedList.length === 0 ? (
              <p>No product found</p>
            ) : (
              searchedList?.map(
                ({ _id, product_name, product_url, product_price }) => (
                  <div
                    className="search_item"
                    key={_id}
                    onClick={() => navigate(`/productinfopage/${_id}`)}
                  >
                    <img className="search_img" alt="" src={product_url} />
                    <div className="search_item_details">
                      <h3>{product_name}</h3>
                      <p>
                        <strong>₹ {product_price}</strong>
                      </p>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
