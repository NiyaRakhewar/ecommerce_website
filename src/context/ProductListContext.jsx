import React, { createContext, useEffect, useReducer } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { initialState, reducer } from "./../Reducer/reducer";
=======
import { initialState, reducer } from "../reducer/reducer";
>>>>>>> 373e5ec2a27b3c6c0f38e7d0ced2abbc0ad1f101
=======
import { initialState, reducer } from "../Reducer/reducer";
>>>>>>> 36d633544b9a669255e4a64a106ff5ac11df24c6
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
