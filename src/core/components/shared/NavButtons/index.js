import React from "react";
import Button from "react-bootstrap/Button";

const NavButtons = (props) => {
  const { handleBackClick, handleNextClick } = props;
  return (
    <>
      <Button variant="primary" onClick={handleBackClick}>
        Back
      </Button>
      <Button variant="primary" onClick={handleNextClick}>
        Next
      </Button>
    </>
  );
};

export default NavButtons;
