import React, { useState } from "react";
import styles from "./Form.module.css";
import { Formik } from "formik";
import validationSchema from "../../services/validationSchema";
import { auth } from "../firebase";
import { UserCredential } from "firebase/auth";

interface IForm {
  firebaseFunc: Function;
  buttonName: String;
}

const Form: React.FC<IForm> = ({ firebaseFunc, buttonName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          console.log(email);
          console.log(password);
          firebaseFunc(auth, email, password)
            .then((useCredential: Promise<UserCredential>) =>
              console.log(useCredential)
            )
            .catch((err: Promise<UserCredential>) => console.log(err));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className={styles.submit} onSubmit={handleSubmit}>
            <p className={styles.label}>Email</p>
            <input
              className={
                errors.email && touched.email
                  ? styles.input__error
                  : styles.input
              }
              type="email"
              placeholder="email@a.com"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className={styles.error__count}>{`${errors.email}`}</p>
            ) : (
              <span className={styles.default__count}></span>
            )}

            <p className={styles.label}>Password</p>
            <input
              className={
                errors.email && touched.email
                  ? styles.input__error
                  : styles.input
              }
              type="password"
              placeholder="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className={styles.error__count}>{`${errors.password}`}</p>
            ) : (
              <span className={styles.default__count}></span>
            )}
            <button className={styles.button} type="submit">
              {buttonName}
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
