import { useState, useEffect, useId } from "react";

const Box = () => {
  const id = useId();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("saskhte shod +++++");

    return () => {
      console.log("Nabod shod -----");
    };
  }, []);

  return <div onClick={() => setCount(count + 1)}>box {count}</div>;
};

export default Box;
