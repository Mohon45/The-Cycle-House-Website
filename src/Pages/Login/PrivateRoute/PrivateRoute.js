import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";
import Spinner from "../../Shared/Loading/Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
