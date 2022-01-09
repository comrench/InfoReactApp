import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { PROVINCE } from "../../../utils/constants";

const Address = (props) => {
  const { pStreetNumber, pStreetName, pCity, pProvince, pPostalCode } =
    props.address;
  const [streetNumber, setStreetNumber] = useState(pStreetNumber);
  const [streetName, setStreetName] = useState(pStreetName);
  const [city, setCity] = useState(pCity);
  const [province, setProvince] = useState(pProvince);
  const [postalCode, setPostalCode] = useState(pPostalCode);

  useEffect(() => {
    props.setAddress({
      pStreetNumber: streetNumber,
      pStreetName: streetName,
      pCity: city,
      pProvince: province,
      pPostalCode: postalCode,
    });
  }, [streetNumber, streetName, city, province, postalCode]);

  console.log(props);

  return (
    <>
      <Row className="g-2 m-20">
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
              defaultValue={streetName}
              onChange={(event) => setStreetName(event.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-20">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="City">
            <Form.Control
              type="text"
              placeholder="City"
              defaultValue={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Province">
            <Form.Select
              aria-label="province"
              defaultValue={province}
              onChange={(event) => setProvince(event.target.value)}
            >
              <option>Select</option>
              <option value="1">{PROVINCE.AB}</option>
              <option value="2">{PROVINCE.BC}</option>
              <option value="3">{PROVINCE.MB}</option>
              <option value="4">{PROVINCE.NB}</option>
              <option value="5">{PROVINCE.NL}</option>
              <option value="6">{PROVINCE.NT}</option>
              <option value="7">{PROVINCE.NS}</option>
              <option value="8">{PROVINCE.NU}</option>
              <option value="9">{PROVINCE.ON}</option>
              <option value="10">{PROVINCE.PE}</option>
              <option value="11">{PROVINCE.QC}</option>
              <option value="12">{PROVINCE.SK}</option>
              <option value="13">{PROVINCE.YT}</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-20">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
            <Form.Control
              type="text"
              placeholder="Postal code"
              defaultValue={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
};

export default Address;
