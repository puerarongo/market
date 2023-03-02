import React, { useState } from "react";
import useAuth from "./useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

// type Props = {
//   children: string | JSX.Element | JSX.Element[];
// };

const Private: React.FC<any> = ({ children }) => {
  const user = useSelector((state: any) => state.user.user);
  console.log("Private", user);
  if (user) {
    console.log("PRIVATE OUTLET");
    return <Outlet />;
  } else {
    console.log("PRIVATE TO LOGIN");
    return <Navigate to="/login" replace />;
  }
};

export default Private;
