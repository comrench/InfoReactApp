import React from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";

const PersonalInfo = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is PersonalInfo</h1>
      <NavButtons
        handleBackClick={() => {
          /** No action needed */
        }}
        handleNextClick={() => navigate(configs.routes.property)}
      />
    </>
  );
};

export default PersonalInfo;
