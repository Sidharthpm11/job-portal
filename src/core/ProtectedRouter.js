import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppcontext } from "./AppContext";

export default function ProtectedRouter(props) {
  const { isLoggdin } = useAppcontext();
  return isLoggdin ? <Route {...props} /> : <Redirect to="/login" />;
}
