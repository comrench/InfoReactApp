import React from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";

const EmploymentInfo = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is EmploymentInfo</h1>
      <NavButtons
        handleBackClick={() => navigate(configs.routes.property)}
        handleNextClick={() => navigate(configs.routes.summary)}
      />
    </>
  );
};

export default EmploymentInfo;
