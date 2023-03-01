import React from "react";
import styles from "./Registration.module.css";
import FormAuth from "../form/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registration: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration</h2>
      <FormAuth
        firebaseFunc={createUserWithEmailAndPassword}
        buttonName={"Sign Up"}
      />
    </div>
  );
};

export default Registration;
