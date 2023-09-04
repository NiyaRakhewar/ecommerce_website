import React, { useContext } from "react";
import { ProductListContext } from "../context/ProductListContext";
import { Link } from "react-router-dom";
export const Categories = () => {
  const { state, dispatch } = useContext(ProductListContext);
  return (
    <div className="home_all_category">
      <div className="category">
        {/* onClick={()=>dispatch({type: "SELECTED_TYPE", payload: item.categoryName})} */}
        {state.category.map((item) => (
          <div
            key={item._id}
            onClick={() =>
              dispatch({ type: "SELECTED_TYPE", payload: item.categoryName })
            }
          >
            <div
              onClick={() =>
                dispatch({ type: "EACH_CATEGORY", payload: item.categoryName })
              }
            >
              <Link className="text" to={"/productPage"}>
                {" "}
                <img
                  className={item.categoryName}
                  alt="img"
                  src={item.categoryImage}
                />
                <h3 style={{ color: "#a312a3" }} className="category-h3">
                  {" "}
                  {item.categoryName.toUpperCase()}{" "}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
