import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  Chat,
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME.path} component={Home} />
        <Route exact path={Routes.SIGNIN.path} component={Singin} />
        <Route exact path={Routes.REGISTRATION.path} component={Registration} />
        <Route exact path={Routes.PROFILE.path} component={Profile} />
        <Route exact path={Routes.FEED.path} component={FeedPage} />
        <Route exact path={Routes.POST.path} component={Post} />
        <Route exact path={Routes.CHAT.path} component={Chat} />
        <Route exact path={Routes.HEADER.path} component={Header} />
        <Route exact path={Routes.HEADER.path} component={Footer} />
        <Route exact path={Routes.Notfound.path} component={Notfound} />
        <Route
          exact
          path={Routes.FORGETPASSWORD.path}
          component={ForgetPasswordPage}
        />
        <Redirect to={Routes.Notfound.path} />
      </Switch>
    </Router>
  );
};

export default App;
