import React from "react";
import Button from "react-bootstrap/Button";

const NavButtons = (props) => {
  const { handleBackClick, handleNextClick } = props;
  return (
    <>
      <Button variant="primary" onClick={handleBackClick} className="m-20">
        Back
      </Button>
      <Button variant="primary" onClick={handleNextClick} className="m-20">
        Next
      </Button>
    </>
  );
};

export default NavButtons;
