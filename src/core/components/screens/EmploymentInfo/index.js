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
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";

const EmploymentInfo = (props) => {
  const [addresses, setAddresses] = useState(
    getAddress(props.employmentAddress)
  );
  const navigate = useNavigate();

  const setAddress = (address, index) => {
    const newArr = addresses.slice();
    newArr[index] = address;
    setAddresses(newArr);
  };

  return (
    <>
      <h1>Employment Info</h1>
      {addresses.map((address, index) => {
        return (
          <div key={index}>
            <h4>Employment address {index + 1}</h4>
            <Address
              key={index}
              address={address}
              setAddress={(addr) => setAddress(addr, index)}
            />
          </div>
        );
      })}
      <Row className="g-2 m-20">
        <Button
          variant="secondary"
          onClick={() =>
            setAddresses([
              ...addresses,
              {
                pStreetNumber: "",
                pStreetName: "",
                pCity: "",
                pProvince: "",
                pPostalCode: "",
              },
            ])
          }
        >
          Add previous employment address
        </Button>
      </Row>
      <NavButtons
        handleBackClick={() => {
          props.setEmploymentAddress(addresses);
          navigate(configs.routes.property);
        }}
        handleNextClick={() => {
          props.setEmploymentAddress(addresses);
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
