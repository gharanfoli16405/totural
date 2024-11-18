import { Types } from "./formLoginTypes";

export const changeInput = (payload) => ({
  type: Types.INPUT_CHANGE,
  payload,
});
