import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";
import Store from "./app/reducers/store.jsx";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route path="/Home" component={App} />
      <Route exact path="/" render={() => <Redirect to="Home" />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
