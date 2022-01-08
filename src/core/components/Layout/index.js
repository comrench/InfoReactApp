import React from "react";
import AppRouter from "../../../AppRouter";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Layout = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default Layout;
