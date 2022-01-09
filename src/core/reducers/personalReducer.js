import { fromJS } from "immutable";
import { SET_PERSONAL_ADDRESS } from "../actions";

export const initialState = fromJS({
  personalAddress: {
    pStreetNumber: "",
    pStreetName: "",
    pCity: "",
    pProvince: "",
    pPostalCode: "",
  },
});

export const persReducer = (state, { type, payload }) => {
  const persState = state || initialState;

  console.log("persReducer", state, type, payload);
  switch (type) {
    case SET_PERSONAL_ADDRESS:
      console.log("In SET_PERSONAL_ADDRESS");
      return persState.setIn(["personalAddress"], payload);
    default:
      return persState;
  }
};
