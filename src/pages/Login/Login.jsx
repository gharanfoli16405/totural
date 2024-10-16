import { useReducer } from "react";
import { initialState, FormLoginReducer } from "reducers/login/reducer";
import { changeNormalField, changeCheckBoxes } from "reducers/login/action";
const Login = () => {
  const FullName = "full name";
  const AGE = "age";
  const PHONE_NUMBER = "phone number";
  const GENDER = "gender";
  const CITY = "city";

  const [fromDataState, dispatch] = useReducer(FormLoginReducer, initialState);
  const { fullName, age, city, phoneNumber, gender, favorites } = fromDataState;

  const handleChange = ({target}) => {
    if (target.name === "favorites") {
      dispatch(
        changeCheckBoxes({
          name: target.name,
          value: target.value,
        })
      );
      return;
    }
    dispatch(changeNormalField({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <div className="">Form With useReducer</div>
      <form action="">
        {/* FullName */}
        <div>
          <label htmlFor={FullName}>{FullName} : </label>
          <input
            type="text"
            placeholder={`Enter your ${FullName}`}
            id={FullName}
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        {/* age */}
        <div>
          <label htmlFor={AGE}>{AGE} : </label>
          <input
            type="number"
            placeholder={`Enter your ${AGE}`}
            id={AGE}
            name={AGE}
            value={age}
            onChange={handleChange}
          />
        </div>
        {/* phoneNumber */}
        <div>
          <label htmlFor={PHONE_NUMBER}>{PHONE_NUMBER}</label>
          <input
            type="tel"
            placeholder={`Enter your ${PHONE_NUMBER} : `}
            id={PHONE_NUMBER}
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        {/* GENDER */}
        <div>
          <label htmlFor="man">man</label>
          <input
            type="radio"
            name={GENDER}
            id="man"
            value="man"
            checked={gender === "man"}
            onChange={handleChange}
          />
          <label htmlFor="woman">woman</label>
          <input
            type="radio"
            name={GENDER}
            id="woman"
            value="woman"
            checked={gender === "woman"}
            onChange={handleChange}
          />
        </div>
        {/* city */}
        <div>
          <label htmlFor={CITY}>select your {CITY}</label>
          <select name={CITY} id={CITY} value={city} onChange={handleChange}>
            <option value=""></option>
            <option value="Iran">Iran</option>
            <option value="Germany">Geramny</option>
          </select>
        </div>
        {/* favorites */}
        <div className="flex">
          {Object.keys(favorites).map((item) => (
            <div key={item}>
              <label htmlFor={item}> {item} </label>
              <input
                type="checkbox"
                id={item}
                name="favorites"
                value={item}
                checked={favorites[item]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default Login;
