import React from "react";
import { Switch, withRouter, Route, Redirect, useHistory } from "react-router-dom";
import privateRoute from "./routes/config";
import authRequest from "../services/api";

const HomePage = withRouter(() => {
  const history = useHistory();

  const checkToken = React.useCallback(() => {
    authRequest
      .verify()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.statusCode === 401) {
          history.push("/login");
        }
      });
  }, [history]);

  React.useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 1000);
  }, [checkToken]);

  const AuthMenu = privateRoute.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={true}
      name={route.label}
      render={(props) => <route.component {...props} />}
    />
  ));

  return <Switch>{localStorage.getItem("token") ? AuthMenu : <Redirect to="/login" />}</Switch>;
});

export default HomePage;
