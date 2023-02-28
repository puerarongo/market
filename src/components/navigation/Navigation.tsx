import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const isLoggedIn = false;

  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        <>
          <div className={styles.nav__container}>
            <NavLink className={styles.link} to="/">
              Shop
            </NavLink>
          </div>
          <div className={styles.nav__confirm}>
            <NavLink to="/personal">Personal</NavLink>
            <NavLink to="/basket">Basket</NavLink>
            <button className={styles.button} type="button">
              Log out
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.nav__container}>
            <NavLink className={styles.link} to="/">
              Shop
            </NavLink>
          </div>
          <div className={styles.nav__confirm}>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
