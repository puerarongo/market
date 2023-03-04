import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.userAdd({user: user.uid, email: user.email}));
      } else {
        dispatch(userActions.userAdd({user: null, email: null}));
      }
    });
  });
  return user;
};

export default useAuth;
