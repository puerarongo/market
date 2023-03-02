import React from "react";
import useAuth from "./useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Public: React.FC<any> = ({ children }) => {
  const user = useSelector((state: any) => state.user.user);
  if (!user) {
    console.log("PUBLIC OUTLET");
    return <Outlet />;
  } else {
    console.log("PUBLIC TO /");
    return <Navigate to="/" replace />;
  }
};

export default Public;
