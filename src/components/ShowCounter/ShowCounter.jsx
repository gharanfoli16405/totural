import { useCountState } from "context/CountProvider/CountProvider";
const ShowCounter = () => {
  console.log("🚀 ~ ShowCounter  render");
  const count = useCountState();

  return <div>{count}</div>;
};

export default ShowCounter;
