import { fromJS } from "immutable";

export const initialState = fromJS({
  personalInfo: {},
  loading: true,
  structure: [],
});

export const persReducer = (state, { type, payload }) => {
  const persState = state || initialState;
  switch (type) {
    case "GET_PERSONAL":
      return { loading: true };
    case "PERSONAL_RECEIVED":
      return {
        ...persState,
        personalInfo: payload,
        loading: false,
      };
    default:
      return persState;
  }
};
