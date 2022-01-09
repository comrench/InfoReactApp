import { fromJS } from "immutable";
import { SET_EMPLOYMENT_ADDRESS } from "../actions";

export const initialState = fromJS({
  employmentAddress: {
    pStreetNumber: "",
    pStreetName: "",
    pCity: "",
    pProvince: "",
    pPostalCode: "",
  },
});

export const empReducer = (state, { type, payload }) => {
  const empState = state || initialState;

  switch (type) {
    case SET_EMPLOYMENT_ADDRESS:
      return empState.setIn(["employmentAddress"], payload);
    default:
      return empState;
  }
};
