import { useState, useEffect } from "react";

const Home = () => {
  const [list, setlist] = useState([]);
  const [loader, setLoader] = useState(true);

  const f = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setlist(json);
    setLoader(false);
  };

  useEffect(() => {
    f();
  }, []);
  return (
    <>
      {loader ? (
        <div>loader</div>
      ) : (
        <>
          <h1>In the name of god</h1>
          <h2>this is my home</h2>{" "}
        </>
      )}
    </>
  );
};

export default Home;
