import React, { useContext } from "react";
import { Navigate } from "react-router";
import { RegisteredUserInfoContext } from "../../App";
import { Outlet, useLocation } from "react-router";

export default function PrivateRoute() {
    const location = useLocation()
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);
    return registered.email ? <Outlet /> : <Navigate to="/login" state={{ from: location.pathname }} />
}
