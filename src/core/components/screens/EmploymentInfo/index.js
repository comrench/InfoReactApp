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
import { Alert, FloatingLabel, Form, Row } from "react-bootstrap";
import { EMP } from "../../../utils/constants";

const EmploymentInfo = (props) => {
  const [addresses, setAddresses] = useState(
    getAddress(props.employmentAddress)
  );
  const [empStatus, setEmpStatus] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const setAddress = (address, index) => {
    const newArr = addresses.slice();
    newArr[index] = address;
    setAddresses(newArr);
  };

  return (
    <>
      <h1>Employment Info</h1>
      <row className="m-20">
        <FloatingLabel controlId="floatingSelectGrid" label="Employment Status">
          <Form.Select
            aria-label="empStatus"
            defaultValue={empStatus}
            onChange={(event) => setEmpStatus(event.target.value)}
          >
            <option>Select</option>
            <option value="1">{EMP.EM}</option>
            <option value="2">{EMP.RE}</option>
            <option value="3">{EMP.ST}</option>
          </Form.Select>
        </FloatingLabel>
      </row>
      {error && (
        <Alert variant={"danger"}>User has to be employed to proceed.</Alert>
      )}
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
          if (empStatus === "1") {
            setError(false);
            props.setEmploymentAddress(addresses);
            navigate(configs.routes.summary);
          } else {
            setError(true);
          }
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
