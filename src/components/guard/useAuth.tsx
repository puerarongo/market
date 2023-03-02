import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

const useAuth = () => {
  //const [currentUser, setCurrentUser] = useState<any>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.userAdd(user.uid));
      } else {
        dispatch(userActions.userAdd(null));
      }
    });
  });
  return user;
};

export default useAuth;
