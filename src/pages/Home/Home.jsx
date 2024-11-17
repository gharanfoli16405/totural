import BtnCounter from "components/BtnCounter";
import Msg from "components/Msg/Msg";
import ShowCounter from "components/ShowCounter";

const Home = () => {
  console.log("🚀 ~ Home page render");

  return (
    <>
      <Msg />
      <BtnCounter />
      <ShowCounter />
    </>
  );
};

export default Home;
