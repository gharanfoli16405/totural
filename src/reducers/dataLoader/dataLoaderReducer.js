import { dataLoaderTypes as types } from "./dataLoaderTypes";

const { FETCH, SUCCESS, FAIL } = types;

export const initialState = {
  loading: true,
  data: null,
  error: false,
};

export const dataLoaderReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true };
    case SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
