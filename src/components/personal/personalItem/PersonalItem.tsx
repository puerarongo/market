import React from "react";
import styles from "./PersonalItem.module.css";
import IProductsFirebase from "../../../services/interface/productsFirebase.interface";

const PersonalItem: React.FC<IProductsFirebase> = ({
  id,
  image,
  title,
  quantity,
  totalPrice,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${id}`}
      />

      <h3 className={styles.title}>{title}</h3>
      <div className={styles.into}>
        <p className={styles.quantity}>{`${quantity} pcs`}</p>
        <p className={styles.price}>{`$ ${totalPrice}`}</p>
      </div>
    </div>
  );
};

export default PersonalItem;
