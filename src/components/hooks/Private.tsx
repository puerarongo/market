import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { personalActions } from "../../redux/slices/personalSlice";

const Private: any = () => {
  const [ready, setReady] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ready && user) {
      getDoc(doc(db, "users", user))
        .then((data) => {
          const { allProducts, allQuantity, allAmount }: any = data.data();
          console.log("allProducts1111: ", allProducts);
          if (allProducts) {
            console.log("allProducts: ", allProducts);
            dispatch(
              personalActions.addBuy({
                allProducts,
                allQuantity,
                allAmount,
              })
            );
          }
          setReady(true);
        })
        .catch((err: Error) => console.log(err));
    }
  }, [ready, user, dispatch]);

  if (user) {
    return ready && <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Private;
