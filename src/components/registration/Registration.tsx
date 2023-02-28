import React from "react";
import styles from "./Registration.module.css";
import Form from "../form/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registration: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Registration</h2>
      <Form
        firebaseFunc={createUserWithEmailAndPassword}
        buttonName={"Sign Up"}
      />
    </div>
  );
};

export default Registration;
