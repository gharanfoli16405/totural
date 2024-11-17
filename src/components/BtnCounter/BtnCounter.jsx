import { useCountSetState } from "context/CountProvider/CountProvider";

const BtnCounter = () => {
  const setCount = useCountSetState();
  const handleClock = () => {
    setCount((prev) => prev + 1);
  };
  console.log("🚀 ~ BtnCounter  render");
  return <button onClick={handleClock}>setCount</button>;
};

export default BtnCounter;
