import { formActionTypes } from "reducers/form/formTypes";

const { INPUT_FIELD, CHECKBOX_FIELD } = formActionTypes;

export const getInputFile = (payload) => ({
  type: INPUT_FIELD,
  payload,
});

export const getMultiSelect = (payload) => ({
  type: CHECKBOX_FIELD,
  payload,
});
