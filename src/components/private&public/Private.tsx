import { useEffect } from "react";
import Loader from "../loader/Loader";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { personalActions } from "../../redux/slices/personalSlice";
import { userActions } from "../../redux/slices/userSlice";

const Private: any = () => {
  const { user, isReady } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isReady && user) {
      getDoc(doc(db, "users", user))
        .then((data) => {
          const { allProducts, allQuantity, allAmount }: any = data.data();
          if (allProducts) {
            dispatch(
              personalActions.addBuy({
                allProducts,
                allQuantity,
                allAmount,
              })
            );
          }

          dispatch(userActions.setIsReady(true));
        })
        .catch((err: Error) => console.log(err));
    }
  }, [isReady, user, dispatch]);

  if (user) return isReady ? <Outlet /> : <Loader />;
  else return <Navigate to="/login" replace />;
};
export default Private;
