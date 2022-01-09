import { makeActionCreator } from "../utils";

export const SET_PERSONAL_ADDRESS = "SET_PERSONAL_ADDRESS";
export const SET_PROPERTY_ADDRESS = "SET_PROPERTY_ADDRESS";
export const SET_EMPLOYMENT_ADDRESS = "SET_EMPLOYMENT_ADDRESS";
export const SET_EMPLOYMENT_STATUS = "SET_EMPLOYMENT_STATUS";

export const setPersonalAddress = makeActionCreator(SET_PERSONAL_ADDRESS);
export const setPropertyAddress = makeActionCreator(SET_PROPERTY_ADDRESS);
export const setEmploymentAddress = makeActionCreator(SET_EMPLOYMENT_ADDRESS);
export const setEmploymentStatus = makeActionCreator(SET_EMPLOYMENT_STATUS);
