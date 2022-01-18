import React from "react";
import { Redirect, Route } from "react-router";
import { withAuth } from "../../../context/auth.context";

// PrivateRoutes alow you to get in especific pages
// ONLY if you are logged in, example edit user
function PrivateRoute(routeProps) {
  // isLoggedIn & isLoading come from withAuth - (context)
  const { isLoggedIn, isLoading } = routeProps;

  // those props comes from this component PrivateRoute
  const { exact, path } = routeProps;
  const ComponentToShow = routeProps.component;

  if (isLoading) return <p>Loading...</p>;
  return (
    <Route
      exact={exact}
      path={path}
      render={function (props) {
        if (!isLoggedIn) return <Redirect to="/login" />;
        else if (isLoggedIn) return <ComponentToShow {...props} />;
      }}
    />
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(PrivateRoute);
