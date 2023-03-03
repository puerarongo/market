import React from "react";
import styles from "./GoogleButton.module.css";
import svgPath from "../../../services/svgPath";

interface IGoogleButton {
  googleFunction: Function;
}

const GoogleButton: React.FC<IGoogleButton> = ({ googleFunction }) => {
  return (
    <>
      <hr className={styles.hr} />
      <p className={styles.google__text}>You can sign in with google login!</p>
      <button
        className={styles.button__google}
        type="button"
        onClick={() => googleFunction()}
      >
        <span className={styles.svg__container}>
          <svg className={styles.svg__google}>
            <use href={svgPath.google + "#google"}></use>
          </svg>
        </span>
        <p className={styles.text__google}>Connect Gmail</p>
      </button>
    </>
  );
};

export default GoogleButton;
