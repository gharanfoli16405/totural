export const careersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();

  return json;
};

export { default } from "./Home";
