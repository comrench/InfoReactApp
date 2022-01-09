import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./core/components/screens/PersonalInfo";
import PropertyInfo from "./core/components/screens/PropertyInfo";
import EmploymentInfo from "./core/components/screens/EmploymentInfo";
import Summary from "./core/components/screens/Summary";
import { configs } from "./core/utils/config";
import { useNavigate } from "react-router-dom";

export const history = createBrowserHistory();
console.log(history);

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Routes>
        <Route
          exact
          path={configs.routes.default}
          element={<PersonalInfo {...props} />}
        />
        <Route
          exact
          path={configs.routes.personal}
          element={<PersonalInfo {...props} />}
        />
        <Route
          exact
          path={configs.routes.property}
          element={<PropertyInfo {...props} />}
        />
        <Route
          exact
          path={configs.routes.employment}
          element={<EmploymentInfo {...props} />}
        />
        <Route
          exact
          path={configs.routes.summary}
          element={<Summary {...props} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
