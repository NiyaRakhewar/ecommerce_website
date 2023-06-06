import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";

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
