import React from "react";
import styles from "./Loader.module.css";
import { Watch } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader__container}>
        <Watch color="#004f44" height={200} width={200} />
      </div>
    </div>
  );
};

export default Loader;
