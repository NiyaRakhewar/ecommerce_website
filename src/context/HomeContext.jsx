import { createContext, useReducer } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { reducer, initialState } from "./../Reducer/reducer";
=======
import { reducer, initialState } from "../reducer/reducer";
>>>>>>> 373e5ec2a27b3c6c0f38e7d0ced2abbc0ad1f101
=======
import { reducer, initialState } from "../Reducer/reducer";
>>>>>>> 36d633544b9a669255e4a64a106ff5ac11df24c6

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <HomeContext.Provider value={{ state, dispatch }}>
        {children}
      </HomeContext.Provider>
    </>
  );
};
