import { actionTypes } from "context/auth/authTypes";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};
//! ewewe

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        user,
        token,
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    //R&D : throw Error
    default:
      throw Error("action type not supported");
  }
};
export default AuthReducer;
