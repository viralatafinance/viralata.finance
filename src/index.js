import React, { Component } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./index.scss";

import Main from "./pages/Main";
import Page404 from "./pages/components/404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={"/"}>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              render={(props) => <Main {...props} i18n={i18n} />}
            />
            <Route render={(props) => <Page404 {...props} i18n={i18n} />} />
          </Switch>
        </BrowserRouter>
      </I18nextProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
