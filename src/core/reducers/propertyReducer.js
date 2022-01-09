import { fromJS } from "immutable";
import { SET_PROPERTY_ADDRESS } from "../actions";

export const initialState = fromJS({
  propertyAddress: {
    pStreetNumber: "",
    pStreetName: "",
    pCity: "",
    pProvince: "",
    pPostalCode: "",
  },
});

export const propReducer = (state, { type, payload }) => {
  const propState = state || initialState;

  switch (type) {
    case SET_PROPERTY_ADDRESS:
      return propState.setIn(["propertyAddress"], payload);
    default:
      return propState;
  }
};
