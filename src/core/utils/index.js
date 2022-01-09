import { isImmutable } from "immutable";

export const getAddress = (address) =>
  isImmutable(address) ? address.toJS() : address;

export const makeActionCreator =
  (type, data = true) =>
  (payload) =>
    data ? { type, payload } : type;
