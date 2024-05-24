import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import AboutUs from "./components/pages/AboutUs";
import Auth from "./components/pages/Auth";
import Login from "./components/pages/Login";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Home} />
        <Route path="/women" component={Women} />
        <Route path="/men" component={Men} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
