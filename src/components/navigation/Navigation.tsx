import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import svgPath from "../../services/svgPath";

// * auth
import useAuth from "../guard/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = false;
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log("navigation useAyth", user);

  const logOut = () => {
    signOut(auth)
      .then((data) => {
        navigate("/");
        console.log(data, "out");
      })
      .catch((error: Error) => console.log(error));
    dispatch(userActions.userAdd(null));
  };

  return (
    <header className={styles.header}>
      <div className={styles.nav__container}>
        <NavLink className={styles.link} to="/">
          Shop
        </NavLink>
      </div>
      <div className={styles.logo__container}>
        <p>Logo</p>
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
          <NavLink to="/registration" className={styles.link}>
            Registration
          </NavLink>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navigation;
