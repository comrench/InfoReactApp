import React from "react";
import { configs } from "../../../utils/config";
import NavButtons from "../../shared/NavButtons";
import { useNavigate } from "react-router-dom";

const Summary = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Summary</h1>
      <NavButtons
        handleBackClick={() => navigate(configs.routes.employment)}
        handleNextClick={() => {
          /** No action */
        }}
      />
    </>
  );
};

export default Summary;
