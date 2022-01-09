import React, { useState } from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../../utils";
import Address from "../../shared/Address";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { setPropertyAddress } from "../../../actions";
import { propertyAddressSelector } from "../../../selectors/PropertyAddress";
import { Alert } from "react-bootstrap";

const PropertyInfo = (props) => {
  const [address, setAddress] = useState(getAddress(props.propertyAddress));
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <h1>Property Info</h1>
      <Address address={address} setAddress={setAddress} />
      {error && (
        <Alert variant={"danger"}>
          Province of the property cannot be Quebec
        </Alert>
      )}
      <NavButtons
        handleBackClick={() => {
          props.setPropertyAddress(address);
          navigate(configs.routes.personal);
        }}
        handleNextClick={() => {
          if (address.pProvince === "11") {
            setError(true);
          } else {
            setError(false);
            props.setPropertyAddress(address);
            navigate(configs.routes.employment);
          }
        }}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  propertyAddress: propertyAddressSelector(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPropertyAddress: (value) => dispatch(setPropertyAddress(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInfo);
