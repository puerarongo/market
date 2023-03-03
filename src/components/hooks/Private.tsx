import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Private: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Private;
