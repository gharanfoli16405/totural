import { ActionLoaginTypes as Types } from "reducers/login/types";
const { CHANGE_NORMALFILED, CHANGE_CHECKBOXES } = Types;
export const initialState = {
  fullName: "",
  age: "",
  city: "",
  phoneNumber: "",
  gender: null,
  favorites: {
    climbing: false,
    natureTourism: true,
    watchingMovie: false,
  },
};

export const FormLoginReducer = (state = initialState, action) => {
  const { name, value } = action.payload;
 
  switch (action.type) {
    case CHANGE_NORMALFILED:
      return { ...state, [name]: value };

    case CHANGE_CHECKBOXES:
      return {
        ...state,
        [name]: {
          ...state.favorites,
          [value]: !Boolean(state.favorites[value]),
        },
      };

    default:
      return { ...state };
  }
};
