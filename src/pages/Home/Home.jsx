import { useLoaderData } from "react-router-dom";

export default function Home() {
  const {
    data: {
      data: { avatar, first_name },
    },
  } = useLoaderData();

  return (
    <>
      <h1>In the name of god</h1>
      <h2>this is my home</h2>
      <figure>
        <img src={avatar} alt="" />
        <figcaption>{first_name}</figcaption>
      </figure>
    </>
  );
}
