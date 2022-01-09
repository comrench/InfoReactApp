import { fromJS } from "immutable";
import { SET_EMPLOYMENT_ADDRESS, SET_EMPLOYMENT_STATUS } from "../actions";

export const initialState = fromJS({
  employmentStatus: "",
  employmentAddress: [
    {
      pStreetNumber: "",
      pStreetName: "",
      pCity: "",
      pProvince: "",
      pPostalCode: "",
    },
  ],
});

export const empReducer = (state, { type, payload }) => {
  const empState = state || initialState;

  switch (type) {
    case SET_EMPLOYMENT_ADDRESS:
      return empState.setIn(["employmentAddress"], payload);
    case SET_EMPLOYMENT_STATUS:
      return empState.setIn(["employmentStatus"], payload);
    default:
      return empState;
  }
};
