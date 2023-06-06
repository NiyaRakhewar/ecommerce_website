import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import { useParams } from "react-router";
import { AddingToWishlist } from "../AddingToWishlist";
import { AddingToCart } from "../AddingToCart";
import "../styles/ProductInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const ProductInfoPage = () => {
  const { state } = useContext(ProductListContext);

  const { id } = useParams();

  const productInfo = state.product.find(({ _id }) => id === _id);

  const {
    product_name,
    product_price,
    product_rating,
    description,
    size,
    product_url,
    product_type,
    product_category,
  } = productInfo;

  return (
    <div className="topToBody productlist-container">
      <div className="product-details-main">
        <div className="product-details-image">
          <img
            alt="img"
            src={product_url}
            // style={{ margin: "10px", maxWidth: "300px" }}
          />
          <div className="wishlist-container">
            <div className="food-content-wishlist">
              <AddingToWishlist product={productInfo} />
            </div>
          </div>
          <div className="rating-container">
            <FontAwesomeIcon icon={faStar} size="lg" />
            <span>{product_rating}</span>
          </div>
        </div>

        <div className="product-details-container">
          <h1>{product_name}</h1>
          <p className="food-price ">₹ {product_price}</p>
          <hr />
          <p className="food-description">
            <strong>Type: </strong> {product_type}
          </p>
          <p className="food-description">
            <strong>Category: </strong> {product_category}
          </p>
          <p className="food-description">
            <strong>Description:</strong> {description}
          </p>
          <p className="food-description">
            <strong>Size:</strong> {size}
          </p>
          <div className="food-button">
            <AddingToCart product={productInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
