import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Public = () => {
  const user = useSelector((state: any) => state.user.user);
  if (!user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default Public;
