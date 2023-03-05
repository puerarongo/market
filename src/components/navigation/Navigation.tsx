import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import svgPath from "../../services/svgPath";

// * auth
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";
import { basketActions } from "../../redux/slices/basketSlice";
import { personalActions } from "../../redux/slices/personalSlice";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  console.log("navigate", user);

  const logOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error: Error) => console.log(error.message));
    dispatch(userActions.userAdd({ user: null, email: null }));
    dispatch(basketActions.allDelete());
    dispatch(personalActions.allDelete());
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <svg className={styles.svg__logo}>
          <use href={svgPath.logo + "#logo"}></use>
        </svg>
      </div>
      <div className={styles.nav__container}>
        <NavLink className={styles.link} to="/">
          Shop
        </NavLink>
      </div>
      {user ? (
        <div className={styles.nav__confirm}>
          <NavLink to="/personal" className={styles.link}>
            <svg className={styles.svg}>
              <use href={svgPath.personal + "#personal"}></use>
            </svg>
          </NavLink>
          <NavLink to="/basket" className={styles.link}>
            <svg className={styles.svg}>
              <use href={svgPath.basket + "#basket"}></use>
            </svg>
          </NavLink>
          <Button
            className={styles.button}
            variant="light"
            type="button"
            onClick={logOut}
          >
            Log out
          </Button>
        </div>
      ) : (
        <div className={styles.nav__confirm}>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navigation;
