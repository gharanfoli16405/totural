import { createContext, useReducer } from "react";

const authContextState = createContext();
const authContextDispath = createContext();

export const authProvider = ({ children }) => {
  const [state, dispatch] = useReducer(first, second);
  return (
    <authContextState.Provider value={state}>
      <authContextDispath.Provider value={dispatch}>
        {children}
      </authContextDispath.Provider>
    </authContextState.Provider>
  );
};

export default authProvider;
