import { createSelector } from "reselect";

export const getPersonalInfoState = (state) => {
  return state.personal.get("personalAddress");
};

export const personalAddressSelector = () =>
  createSelector(
    getPersonalInfoState,
    (personalInfoState) => personalInfoState
  );
