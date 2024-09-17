import { useState } from "react";

const Home = () => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    console.log("initial - ", count);
    // setcount((current) => current - 1);
    setcount(count + 1, (prevValue, newValue) => {
      console.log(newValue);
    });
  };

  return (
    <>
      <div className="flex py-24 align-middle">
        <button className="border border-black p-4" onClick={handleClick}>
          decrease
        </button>
        <div className="mx-10">{count}</div>
        {/* <button
          className="border border-black p-4"
          onClick={() =>
            setTimeout(function () {
              setcount((current) => current + 1);
            }, 3000)
          }
        >
          increase{" "}
        </button> */}
      </div>
    </>
  );
};

export default Home;
