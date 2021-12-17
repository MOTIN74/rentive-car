import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
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
