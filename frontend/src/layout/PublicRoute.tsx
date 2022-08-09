import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Footer, Header } from "../components";

const PublicRoute = ({ component: Component, visible, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          <Header visible={true} />
          <Component {...props} />
          <Footer />
        </Fragment>
      )}
    />
  );
};

export default PublicRoute;
