import { isImmutable } from "immutable";
import { PROVINCE } from "./constants";

export const getAddress = (address) =>
  isImmutable(address) ? address.toJS() : address;

export const makeActionCreator =
  (type, data = true) =>
  (payload) =>
    data ? { type, payload } : type;

export const getStr = (str) => (str ? str : "");

export const getProvinceName = (index) => {
  console.log(index);
  switch (index) {
    case "1":
      return PROVINCE.AB;
    case "2":
      return PROVINCE.BC;
    case "3":
      return PROVINCE.MB;
    case "3":
      return PROVINCE.NB;
    case "5":
      return PROVINCE.NL;
    case "6":
      return PROVINCE.NT;
    case "7":
      return PROVINCE.NS;
    case "8":
      return PROVINCE.NU;
    case "9":
      return PROVINCE.ON;
    case "10":
      return PROVINCE.PE;
    case "11":
      return PROVINCE.QC;
    case "12":
      return PROVINCE.SK;
    case "13":
      return PROVINCE.YT;
    default:
      return "";
  }
};

export const getAddressString = (address) =>
  `${getStr(address.pStreetNumber)} ${getStr(address.pStreetName)} ${getStr(
    address.pCity
  )} ${getProvinceName(getStr(address.pProvince))} ${getStr(
    address.pPostalCode
  )}`;
