import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header } from "./components";
import { PrivateRoute, PublicRoute } from "./layout";
import {
  ABOUTMe,
  Activation,
  Chat,
  Comments,
  FeedPage,
  ForgetPasswordPage,
  Home,
  Notfound,
  Post,
  Profile,
  Registration,
  Singin,
} from "./pages";

import { Routes } from "./routes";
import ContextProvider from "./services/context";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Switch>
          <PublicRoute exact path={Routes.HOME.path} component={Home} />
          <PublicRoute exact path={Routes.SIGNIN.path} component={Singin} />
          <PublicRoute
            exact
            path={Routes.REGISTRATION.path}
            component={Registration}
            visible={false}
          />
          <PrivateRoute exact path={Routes.PROFILE.path} component={Profile} />
          <PrivateRoute exact path={Routes.FEED.path} component={FeedPage} />
          <PrivateRoute exact path={Routes.POST.path} component={Post} />
          <PrivateRoute exact path={Routes.CHAT.path} component={Chat} />
          <PrivateRoute exact path={Routes.ABOUTME.path} component={ABOUTMe} />
          <PrivateRoute
            exact
            path={Routes.COMMENTS.path}
            component={Comments}
          />

          <PublicRoute exact path={Routes.Notfound.path} component={Notfound} />
          <PublicRoute
            exact
            path={Routes.FORGETPASSWORD.path}
            component={ForgetPasswordPage}
          />
          <Route
            exact
            path={Routes.ACCOUNT_ACTIVATION.path}
            component={Activation}
          />
          <Redirect to={Routes.Notfound.path} />
        </Switch>
      </ContextProvider>
    </Router>
  );
};

export default App;
