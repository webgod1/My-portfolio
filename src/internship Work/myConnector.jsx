import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function MyConnector() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default MyConnector;
