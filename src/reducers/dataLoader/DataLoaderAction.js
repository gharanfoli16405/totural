import { dataLoaderTypes as types } from "./dataLoaderTypes";

const { FETCH, SUCCESS, FAIL } = types;

export const getDataStart = (payload) => ({
  type: FETCH,
  payload,
});

export const getDataSuccess = (payload) => ({
  type: SUCCESS,
  payload,
});

export const getDataFailure = (payload) => ({
  type: FAIL,
  payload,
});
