import { createSelector } from "reselect";

export const getEmploymentInfoState = (state) => {
  return state.employment.get("employmentAddress");
};

export const employmentAddressSelector = () =>
  createSelector(
    getEmploymentInfoState,
    (employmentInfoState) => employmentInfoState
  );

export const employmentStatusSelector = () =>
  createSelector(
    (state) => state.employment.get("employmentStatus"),
    (employmentInfoState) => employmentInfoState
  );
