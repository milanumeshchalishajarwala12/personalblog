import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./Compoments/Navbar";
import Homepage from "./Compoments/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Aboutme from "./Compoments/Aboutme";
import Signup from "./Compoments/Signup";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Switch>
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
