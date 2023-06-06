import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
export const ProductListContext = createContext();
export const ProductListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        dispatch({ type: "CATEGORIES", payload: data.categories });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        dispatch({ type: "All_PRODUCTS", payload: data.products });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <ProductListContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductListContext.Provider>
  );
};
