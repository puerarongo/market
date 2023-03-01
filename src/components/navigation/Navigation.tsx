import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import svgPath from "../../services/svgPath";

const Navigation: React.FC = () => {
  const isLoggedIn = true;

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
      {isLoggedIn ? (
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
          <Button className={styles.button} variant="light" type="button">
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
