import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

const handleInputChange = (event) => console.log(event.target.value);

const Address = (props) => {
  const { pStreetNumber, pStreetName, pCity, pProvince, pPostalCode } =
    props.address;
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Street Number">
            <Form.Control
              type="number"
              placeholder="Street number"
              defaultValue={streetNumber}
              onChange={(event) => setStreetNumber(event.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Street Name">
            <Form.Control
              type="text"
              placeholder="Street name"
              defaultValue=""
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="City">
            <Form.Control
              type="text"
              placeholder="City"
              defaultValue=""
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Province">
            <Form.Select aria-label="Floating label select example">
              <option>Select</option>
              <option value="1">Ontario</option>
              <option value="2">British Columbia</option>
              <option value="3">Quebec</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
            <Form.Control
              type="text"
              placeholder="Postal code"
              defaultValue=""
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
};

export default Address;
