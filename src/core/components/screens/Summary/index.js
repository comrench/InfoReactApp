import React from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { employmentAddressSelector } from "../../../selectors/EmploymentAddress";
import { connect } from "react-redux";
import { personalAddressSelector } from "../../../selectors/PersonalAddress";
import { propertyAddressSelector } from "../../../selectors/PropertyAddress";
import { getAddress, getAddressString } from "../../../utils";

const Summary = (props) => {
  const { personalAddress, propertyAddress, employmentAddress } = props;
  const personalAddr = getAddress(personalAddress);
  const propertyAddr = getAddress(propertyAddress);
  const employmentAddr = getAddress(employmentAddress);

  const personalAddressString = getAddressString(personalAddr).trim();
  const propertyAddressString = getAddressString(propertyAddr).trim();
  const employmentAddressStringArr = employmentAddr.map((address) =>
    getAddressString(address)
  );

  const navigate = useNavigate();
  return (
    <>
      <h1>Summary</h1>
      {personalAddressString && (
        <>
          <h5>Personal Info</h5>
          <h6>{personalAddressString}</h6>
        </>
      )}
      {propertyAddressString && (
        <>
          <h5>Property Info</h5>
          <h6>{propertyAddressString}</h6>
        </>
      )}
      {employmentAddressStringArr[0].trim() && (
        <>
          <h5>Employment Info</h5>
          {employmentAddressStringArr.map((empAddr) => (
            <h6>{empAddr}</h6>
          ))}
        </>
      )}
      <NavButtons
        handleBackClick={() => navigate(configs.routes.employment)}
        handleNextClick={() => {
          /** No action */
        }}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  personalAddress: personalAddressSelector(),
  propertyAddress: propertyAddressSelector(),
  employmentAddress: employmentAddressSelector(),
});

export default connect(mapStateToProps, null)(Summary);
