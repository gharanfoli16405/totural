import { person, brands } from "constant/test";
// import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
  const { firstName: nikName, lastName, age } = person;
  const [, , brand] = brands;
  // const data = useLoaderData();
  // console.log("🚀 ~ AboutUs ~ data:", data);

  return (
    <>
      <h1>IN the name of god</h1>
      <p>my first name is {nikName}</p>
      <p>my family is {lastName}</p>
      <p>Im {age} years old</p>
      <p>my brand car is {brand}</p>
    </>
  );
};

export default AboutUs;
