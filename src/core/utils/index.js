export const makeActionCreator =
  (type, data = true) =>
  (payload) =>
    data ? { type, payload } : type;
