import { useLoaderData } from "react-router-dom";
const ListtUser = () => {
  const { data } = useLoaderData();
  console.log("🚀 ~ ListtUser ~ listUsers:", data);

  return <div>ListtUser</div>;
};

export default ListtUser;
