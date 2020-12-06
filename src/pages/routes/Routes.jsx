/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route as Router, Redirect } from "react-router-dom";

function Route({ component: Component, auth, ...rest }) {
  const token = localStorage.getItem("token");

  if (auth) {
    return (
      <Router
        {...rest}
        render={(props) => {
          return token ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      />
    );
  }

  return <Router {...rest} render={(props) => <Component {...props} />} />;
}
export default Route;
