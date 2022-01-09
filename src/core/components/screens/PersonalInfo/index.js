import React from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";
import Address from "../../shared/Address";

const PersonalInfo = (props) => {
  const navigate = useNavigate();
  const myAddress = {
    pStreetNumber: "",
    pStreetName: "",
    pCity: "",
    pProvince: "",
    pPostalCode: "",
  };
  return (
    <>
      <h1>PersonalInfo</h1>
      <Address address={myAddress} />
      <NavButtons
        handleBackClick={() => {
          /** No action needed */
        }}
        handleNextClick={() => navigate(configs.routes.property)}
      />
    </>
  );
};

export default PersonalInfo;
