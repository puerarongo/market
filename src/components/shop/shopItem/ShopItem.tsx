import React from "react";
import styles from "./ShopItem.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../../redux/slices/basketSlice";
import { Link } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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
  const user = useSelector((state: any) => state.user.user);

  const addToBasket = () => {
    if (user) {
      dispatch(
        basketActions.addProduct({
          id: id,
          image: image,
          title: title,
          overview: overview,
          price: price,
        })
      );
      // Notify.success("Product added successfully");
    } else
      Notify.failure(
        "You must be logged in to your profile to add a product to your shopping cart."
      );
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${id}`}
      />
      <div className={styles.detail}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{`Price: $ ${price}`}</p>
        <div className={styles.media}>
          <Button type="button" className={styles.detal__button}>
            <Link to={`${id}`} className={styles.detail__link}>
              Detail
            </Link>
          </Button>
          <Button
            variant="success"
            className={styles.add__button}
            type="button"
            onClick={addToBasket}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
