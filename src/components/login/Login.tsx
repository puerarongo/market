import React from "react";
import styles from "../registration/Registration.module.css";
import Form from "../form/Form";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <Form firebaseFunc={signInWithEmailAndPassword} buttonName={"Sign In"} />
    </div>
  );
};

export default Login;
