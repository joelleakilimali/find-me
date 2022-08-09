import React, { Fragment, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Footer, Header, SecuredHeader, Slidebar } from "../components";
import { Routes } from "../routes";
import { Context } from "../services/context";

const PrivateRoute = ({ component: Component, visible, ...rest }: any) => {
  const { getToken } = useContext(Context);
  const token = getToken();

  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          {token ? (
            <div className="flex bg-default ">
              <Slidebar />
              <div className="flex-1">
                <SecuredHeader />
                <div className="px-5">
                  <Component {...props} />
                </div>
                {/*<Footer />*/}
              </div>
            </div>
          ) : (
            <Redirect to={Routes.SIGNIN.path} />
          )}
        </Fragment>
      )}
    />
  );
};

export default PrivateRoute;
