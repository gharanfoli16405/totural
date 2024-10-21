import { useState, useRef, useEffect } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    user: "",
    password: "",
  });

  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current.focus());
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  return (
    <>
      <h1>In the name of god</h1>
      <div>
        <label htmlFor="user">user : </label>
        <input
          type="text"
          id="user"
          name="user"
          value={loginForm.user}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      <div>
        <label htmlFor="password">password : </label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Login;
