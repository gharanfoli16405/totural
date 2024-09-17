import { useReducer } from "react";

import { formReducer, initialState } from "reducers/form/formReducer";

import { getInputFile, getMultiSelect } from "reducers/form/formActtion";

const History = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { title, firstName, email, phoneNumber, age, gender, favorite } = state;

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
            onChange={(e) =>
              dispatch(
                getInputFile({ name: e.target.name, value: e.target.value })
              )
            }
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
            onChange={(e) =>
              dispatch(
                getInputFile({ name: e.target.name, value: e.target.value })
              )
            }
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
            onChange={(e) =>
              dispatch(
                getInputFile({ name: e.target.name, value: e.target.value })
              )
            }
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
            onChange={(e) =>
              dispatch(
                getInputFile({ name: e.target.name, value: e.target.value })
              )
            }
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
            onChange={(e) =>
              dispatch(
                getInputFile({ name: e.target.name, value: e.target.value })
              )
            }
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
              onChange={(e) =>
                dispatch(
                  getInputFile({ name: e.target.name, value: e.target.value })
                )
              }
            />
          </span>
          <span>
            <label htmlFor="woman">woman</label>
            <input
              type="radio"
              name="gender"
              id="woman"
              value="woman"
              onChange={(e) =>
                dispatch(
                  getInputFile({ name: e.target.name, value: e.target.value })
                )
              }
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
              onChange={(e) =>
                dispatch(
                  getMultiSelect({
                    filed: "favorite",
                    name: e.target.name,
                  })
                )
              }
            />
          </span>
          <span>
            <label for="horns">Horns</label>
            <input
              type="checkbox"
              id="horns"
              name="horns"
              checked={favorite.horns}
              onChange={(e) =>
                dispatch(
                  getMultiSelect({
                    filed: "favorite",
                    name: e.target.name,
                  })
                )
              }
            />
          </span>
        </div>
      </form>
    </>
  );
};

export default History;
