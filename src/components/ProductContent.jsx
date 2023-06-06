import React, { useContext } from "react";
// import {HomeContext} from "../context/HomeContext"
// import { FaRegHeart, FaShoppingCart} from "react-icons/fa";
import { ProductListContext } from "../context/ProductListContext";
import { AddingToCart } from "./AddingToCart";
import { AddingToWishlist } from "./AddingToWishlist";
import { useNavigate } from "react-router-dom";
import "./styles/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const ProductContent = () => {
  const { state } = useContext(ProductListContext);

  const navigate = useNavigate();

  const eachCategory =
    state.selectedCategory === "All"
      ? state.product
      : state.product.filter(
          (item) => item.product_category === state.selectedCategory
        );

  const filterRating =
    state.rating !== 0
      ? eachCategory.filter((item) => item.product_rating >= state.rating)
      : eachCategory;

  const filterCheckbox =
    state.selectedType.length === 0
      ? filterRating
      : filterRating.filter((item) =>
          state.selectedType.includes(item.product_category)
        );

  const filterRange =
    state.range === 1000
      ? filterCheckbox
      : filterCheckbox.filter((item) => item.product_price <= state.range);

  const sortByPrice =
    state.sortValue === "LowToHigh"
      ? filterRange.sort((a, b) => a.product_price - b.product_price)
      : state.sortValue === "HighToLow"
      ? filterRange.sort((a, b) => b.product_price - a.product_price)
      : filterRange;

  return (
    <div className="productlist-main">
      <div className="productlist-main-header">
        {filterRange.length === 0 ? (
          <h1 className="font-wt-bold">
            {" "}
            No products found within the selected filter.
          </h1>
        ) : (
          <div className="productcount-productlist">
            <h2 className="font-weight-bold text-lg">
              Products : {filterRange.length}
            </h2>
            <div className="productlist-main-card-container">
              {sortByPrice?.map((product) => {
                const {
                  _id,
                  product_name,
                  product_url,
                  product_type,
                  product_price,
                  product_rating,
                } = product;
                return (
                  <div
                    key={_id}
                    className="card-container card-container-shadow productlist-card brd-rd-semi-sq"
                  >
                    <div className="card-img-container cursor-pointer">
                      <img
                        alt="img"
                        src={product_url}
                        onClick={() => navigate(`/productinfopage/${_id}`)}
                        className="card-img productlist-card-img brd-rd-semi-sq"
                      />
                      <AddingToWishlist product={product} />
                      <button className="productlist-card-rating-container">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "white" }}
                        />{" "}
                        {product_rating}
                      </button>
                    </div>

                    <div className="card-content product-card-content">
                      <div className="product-card-text">
                        <div
                          onClick={() => navigate(`/productinfopage/${_id}`)}
                          className="product-card-title cursor-pointer"
                        >
                          {product_name}
                        </div>

                        <div className="product-card-price-container">
                          <p>{product_type}</p>

                          {/* <p>{product_category}</p> */}
                          <p className="price-tag">₹ {product_price}</p>
                        </div>
                      </div>

                      <AddingToCart product={product} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
