import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Register, Login } from "./pages/auth";
import HomePage from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <HomePage />
      </Switch>
    </Router>
  );
}

export default App;
