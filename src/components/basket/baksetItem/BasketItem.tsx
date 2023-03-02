import React from "react";
import styles from "./BasketItem.module.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { basketActions } from "../../../redux/slices/basketSlice";

interface IBasketItem {
  id: Number;
  image: String;
  title: String;
  quantity: Number;
  price: Number;
}

const BasketItem: React.FC<IBasketItem> = ({
  id,
  image,
  title,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  const deleteFromBasket = () => {
    dispatch(
      basketActions.deleteProduct({
        id: id,
      })
    );
    console.log("PRODUCT WAS DELETED!");
  };
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${id}`}
      />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.quantity}>{`${quantity} pcs`}</p>
      <p className={styles.price}>{`$ ${price}`}</p>
      <Button
        variant="danger"
        className={styles.button}
        type="button"
        onClick={deleteFromBasket}
      >
        Delete
      </Button>
    </div>
  );
};

export default BasketItem;
