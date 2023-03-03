import React from "react";
import styles from "./Form.module.css";
import { Formik } from "formik";
import validationSchema from "../../services/validationSchema";
import { auth } from "../firebase";
import { UserCredential } from "firebase/auth";

// * Bootstrap
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

// * TEST
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

interface IFormAuth {
  firebaseFunc: Function;
  buttonName: String;
  formType: String;
}

const FormAuth: React.FC<IFormAuth> = ({
  firebaseFunc,
  buttonName,
  formType,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          firebaseFunc(auth, email, password)
            .then(async (useCredential: UserCredential) => {
              if (formType === "registration") {
                const { user } = useCredential;
                await setDoc(doc(db, "users", user.uid), {
                  uid: user.uid,
                  email,
                });
              }
              await navigate("/personal");
              dispatch(userActions.userAdd(useCredential.user.uid));
            })
            .catch((error: Error) => console.log(error.message));
          values.email = "";
          values.password = "";
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
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Form.Label className={styles.label}>
              Email
              <Form.Control
                size="lg"
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
            </Form.Label>

            <Form.Label className={styles.label}>
              Password
              <Form.Control
                size="lg"
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
            </Form.Label>

            <Button type="submit" size="lg" className={styles.button}>
              {buttonName}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormAuth;
