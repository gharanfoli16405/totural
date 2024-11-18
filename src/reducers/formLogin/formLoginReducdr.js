import { Types } from "./formLoginTypes";

export const initialState = {
  user: "",
  password: "",
};

const { INPUT_CHANGE } = Types;

export const formLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INPUT_CHANGE:
      return { ...state, ...payload };

    default:
      return { ...state };
  }
};
