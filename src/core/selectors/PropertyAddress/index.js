import { createSelector } from "reselect";

export const getPropertyInfoState = (state) => {
  return state.property.get("propertyAddress");
};

export const propertyAddressSelector = () =>
  createSelector(
    getPropertyInfoState,
    (propertyInfoState) => propertyInfoState
  );
