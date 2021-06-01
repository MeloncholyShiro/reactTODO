import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Authorize } from "./pages/Authorize";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/">
        <Authorize />
      </Route>
      <Application></Application>
    </React.StrictMode>
  </Router>,
  document.querySelector("#root")
);
