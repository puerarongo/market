import React from "react";
import styles from "../registration/Registration.module.css";
import FormAuth from "../form/Form";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <FormAuth
        firebaseFunc={signInWithEmailAndPassword}
        buttonName={"Sign In"}
      />
    </div>
  );
};

export default Login;
