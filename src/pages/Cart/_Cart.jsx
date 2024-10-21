import React, { useState } from "react";



const Cart = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const incrementCountTwice = () => {
    handleIncrease();
    handleIncrease();
  };

  return (
    <>
      {/* <button onClick={() => setCount(count - 1)}>decrease</button> */}
      <div>{count}</div>
      <button onClick={incrementCountTwice}>increase</button>
    </>
  );
};

export default Cart;
