import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import $ from "jquery";
import popper from "popper.js";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
