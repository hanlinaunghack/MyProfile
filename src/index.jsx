import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "./app/components/home.jsx";
import ContactComponent from "./app/components/contact.jsx";
import EducationComponent from "./app/components/education.jsx";
import ProjectsComponent from "./app/components/projects.jsx";
import MyCatComponent from "./app/components/mycat.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";
import Store from "./app/reducers/store.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route path="/home" component={HomeComponent} />
      <Route path="/contact" component={ContactComponent} />
      <Route path="/experience&education" component={EducationComponent} />
      <Route path="/projects" component={ProjectsComponent} />
      <Route path="/zylo" component={MyCatComponent} />
      <Route exact path="/" render={() => <Redirect to="Home" />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
