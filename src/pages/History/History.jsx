import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

const History = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");
  const [favorite, setFavorite] = useState({
    horns: false,
    scales: false,
  });

  const handleChangeFavorite = (e) => {
    setFavorite({ ...favorite, [e.target.name]: !favorite[e.target.name] });
  };

  return (
    <>
      <form action="">
        {/*title  */}
        <div>
          <label htmlFor="title">title</label>
          <select
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value=""></option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
        </div>
        {/*  firstName*/}
        <div>
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/*phoneNumber */}
        <div>
          <label htmlFor="phoneNumber">phoneNumber</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {/*  age*/}
        <div>
          <label htmlFor="age">age</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        {/* gender */}
        <div>
          <span>
            <label htmlFor="man">man</label>
            <input
              type="radio"
              name="gender"
              id="man"
              value="man"
              onChange={(e) => setGender(e.target.value)}
            />
          </span>
          <span>
            <label htmlFor="woman">woman</label>
            <input
              type="radio"
              name="gender"
              id="woman"
              value="woman"
              onChange={(e) => setGender(e.target.value)}
            />
          </span>
        </div>
        {/* favorite */}
        <div>
          <span>
            <label for="scales">Scales</label>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={favorite.scales}
              onChange={handleChangeFavorite}
            />
          </span>
          <span>
            <label for="horns">Horns</label>
            <input
              type="checkbox"
              id="horns"
              name="horns"
              checked={favorite.horns}
              onChange={handleChangeFavorite}
            />
          </span>
        </div>
      </form>
    </>
  );
};

export default History;
