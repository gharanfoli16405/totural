import { useState, createContext, useContext } from "react";

export const CountContext = createContext();
export const CountContextSetState = createContext();
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(2);
  console.log("CountProvider");

  return (
    <>
      <CountContext.Provider value={count}>
        <CountContextSetState.Provider value={setCount}>
          {children}
        </CountContextSetState.Provider>
      </CountContext.Provider>
    </>
  );
};

export const useCountState = () => {
  const count = useContext(CountContext);
  if (count === undefined) {
    throw new Error("render <CounterProvider /> at top of tree");
  }
  return count;
};

export const useCountSetState = () => {
  const setCount = useContext(CountContextSetState);
  if (setCount === undefined) {
    throw new Error("render <CounterProvider /> at top of tree");
  }
  return setCount;
};
