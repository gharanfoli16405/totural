import { person, brands } from "constant/test";
import { useState } from "react";

const AboutUs = () => {
  const { firstName: nikName, lastName, age } = person;
  const [, , brand] = brands;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log("Initial value:- ", value);
    setValue(e.target.value);
    console.log("Final value:- ", value);
  };

  return (
    <>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default AboutUs;
