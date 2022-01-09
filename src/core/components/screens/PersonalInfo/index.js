import React, { useState } from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";
import Address from "../../shared/Address";
import { setPersonalAddress } from "../../../actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { personalAddressSelector } from "../../../selectors/PersonalAddress";
import { isImmutable } from "immutable";

const getAddress = (address) =>
  isImmutable(address) ? address.toJS() : address;

const PersonalInfo = (props) => {
  const [address, setAddress] = useState(getAddress(props.personalAddress));
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
      <h1>Personal Info</h1>
      <Address address={address} setAddress={setAddress} />
      <NavButtons
        handleBackClick={() => {
          /** No action needed */
        }}
        handleNextClick={() => {
          props.setPersonalAddress(address);
          navigate(configs.routes.property);
        }}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  personalAddress: personalAddressSelector(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPersonalAddress: (value) => dispatch(setPersonalAddress(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
