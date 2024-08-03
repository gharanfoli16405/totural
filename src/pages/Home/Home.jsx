import { useLoaderData } from "react-router-dom";

export default function Home() {
  const users = useLoaderData();

  // console.log("users", users);

  return (
    <>
      <h1>In the name of god</h1>
      <h2>this is my home</h2>{" "}
    </>
  );
}
