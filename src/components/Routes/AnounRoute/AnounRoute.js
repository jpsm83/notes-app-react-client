import React from "react";
import { Redirect, Route } from "react-router";
import { withAuth } from "../../../context/auth.context";

// AnounRoute alow you to get especific pages ONLY if you are not logged
// in, example a login page, you cant get there
// if you are already logge in
function AnounRoute(routeProps) {
  const { isLoggedIn, isLoading } = routeProps;

  const { exact, path } = routeProps;
  const ComponentToShow = routeProps.component;

  if (isLoading) return <p>Loading...</p>;
  return (
    <Route
      exact={exact}
      path={path}
      render={function (props) {
        if (isLoggedIn) return <Redirect to="/" />;
        else if (!isLoggedIn) return <ComponentToShow {...props} />;
      }}
    />
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(AnounRoute);
