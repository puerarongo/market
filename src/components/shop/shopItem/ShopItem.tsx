import React from "react";
import styles from "./ShopItem.module.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { basketActions } from "../../../redux/slices/basketSlice";
import { Link } from "react-router-dom";

interface IShopItem {
  id: Number;
  image: String;
  title: String;
  overview: String;
  price: Number;
}

const ShopItem: React.FC<IShopItem> = ({
  id,
  image,
  title,
  overview,
  price,
}) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(
      basketActions.addProduct({
        id: id,
        image: image,
        title: title,
        overview: overview,
        price: price,
      })
    );
    console.log("PRODUCT ADDED IN BASKET!");
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${id}`}
      />
      <div className={styles.detail}>
        <h3 className="title">{title}</h3>
        <p className={styles.price}>{`${price}`} $</p>
        <Button type="button">
          <Link to={`${id}`} className={styles.detail__link}>Detail</Link>
        </Button>
        <Button variant="success" type="button" onClick={addToBasket}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default ShopItem;
