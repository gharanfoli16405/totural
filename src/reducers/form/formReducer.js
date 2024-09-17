import { formActionTypes as actionTypes } from "./formTypes";
const initialState = {
  title: "",
  firstName: "",
  email: "",
  phoneNumber: "",
  age: null,
  gender: "",
  favorite: {
    horns: false,
    scales: false,
  },
};
const { INPUT_FIELD, CHECKBOX_FIELD } = actionTypes;

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_FIELD:
      return { ...state, [action.payload.name]: action.payload.value };
    case CHECKBOX_FIELD:
      return {
        ...state,
        favorite: {
          ...action.payload.filed,
          [action.payload.name]: !action.payload.filed[action.payload.name],
        },
      };

    default:
      return state;
  }
};

export { initialState, formReducer };
