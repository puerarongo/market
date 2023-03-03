import React, { useState, useEffect } from "react";
import styles from "./Personal.module.css";
import useAuth from "../hooks/useAuth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Personal: React.FC = () => {
  const [data, setData] = useState<any>("");
  const { user } = useAuth();

  const clickHandler = () => {
    console.log(222, user);
    //setDoc(doc(db, "users", user), {
    //  ...data,
    //  newData: "DADA YA!",
    //});
  };

  useEffect(() => {
    getDoc(doc(db, "users", user))
      .then((data) => {
        if (data.exists()) {
          console.log("Document data:", data.data());
          setData(data.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((err: Error) => console.log(err));
  }, [user]);
  return (
    <div className={styles.container}>
      {data ? (
        <>
          <h2 className={styles.title}>Hello, {data.email}</h2>
          <button type="button" onClick={clickHandler}>
            Click!
          </button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Personal;
