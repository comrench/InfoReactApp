import React, { useState } from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../../utils";
import Address from "../../shared/Address";
import { createStructuredSelector } from "reselect";
import { employmentAddressSelector } from "../../../selectors/EmploymentAddress";
import { setEmploymentAddress } from "../../../actions";
import { connect } from "react-redux";

const EmploymentInfo = (props) => {
  const [address, setAddress] = useState(getAddress(props.employmentAddress));
  const navigate = useNavigate();
  return (
    <>
      <h1>Employment Info</h1>
      <Address address={address} setAddress={setAddress} />
      <NavButtons
        handleBackClick={() => {
          props.setEmploymentAddress(address);
          navigate(configs.routes.property);
        }}
        handleNextClick={() => {
          props.setEmploymentAddress(address);
          navigate(configs.routes.summary);
        }}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  employmentAddress: employmentAddressSelector(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setEmploymentAddress: (value) => dispatch(setEmploymentAddress(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentInfo);
