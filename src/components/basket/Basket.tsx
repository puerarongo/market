import React from "react";
import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Basket: React.FC = () => {
  const items = useSelector((state: any) => state.basket);

  console.log("BASKET INTO", items);
  return (
    <div className={styles.container}>
      <ul className={styles.basket__list}>
        <li className={styles.item}></li>
      </ul>
      <Button type="button">Buy</Button>
    </div>
  );
};

export default Basket;
