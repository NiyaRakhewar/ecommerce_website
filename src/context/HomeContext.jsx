import { createContext, useReducer } from "react";

import { Reducer, initialState } from "../reducerFolder/Reducer";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <HomeContext.Provider value={{ state, dispatch }}>
        {children}
      </HomeContext.Provider>
    </>
  );
};
