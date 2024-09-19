import { dataLoaderTypes as types } from "./dataLoaderTypes";

const { FETCH, SUCCESS, FAIL } = types;

export const initialState = {
  loading: false,
  data: {},
  error: false,
};

export const dataReducer = (state = initialState, action) => {
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
