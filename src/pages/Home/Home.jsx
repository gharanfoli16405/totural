import { getUser, getPosts, getComments } from "helpers/callback02";
export default function Home() {
  getUser(123, (res) => getPosts(res, (res2) => getComments(res2)));
  return (
    <>
      <h1>In the name of god</h1>
    </>
  );
}
