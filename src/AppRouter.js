import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./core/components/screens/PersonalInfo";
import PropertyInfo from "./core/components/screens/PropertyInfo";
import EmploymentInfo from "./core/components/screens/EmploymentInfo";
import Summary from "./core/components/screens/Summary";
import { configs } from "./core/utils/config";

export const history = createBrowserHistory();

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path={configs.routes.default} element={<PersonalInfo />} />
        <Route
          exact
          path={configs.routes.personal}
          element={<PersonalInfo />}
        />
        <Route
          exact
          path={configs.routes.property}
          element={<PropertyInfo />}
        />
        <Route
          exact
          path={configs.routes.employment}
          element={<EmploymentInfo />}
        />
        <Route exact path={configs.routes.summary} element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
