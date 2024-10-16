import { ActionLoaginTypes as Types } from "reducers/login/types";
const { CHANGE_NORMALFILED, CHANGE_CHECKBOXES } = Types;
export const changeNormalField = (payload) => ({
  type: CHANGE_NORMALFILED,
  payload,
});

export const changeCheckBoxes = (payload) => ({
  type: CHANGE_CHECKBOXES,
  payload,
});
