import Input from "components/Input";
import { useState } from "react";

const Login = () => {
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: null,
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const { firstName, lastName, email, phoneNumber, age, password } = form;

  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        {/* firstName */}
        <Input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />

        {/* lastName */}
        <Input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        {/* age */}
        <Input type="number" name="age" value={age} onChange={handleChange} />
        {/* email */}
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {/* phoneNumber */}
        <Input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
        {/*  password*/}
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Login;
