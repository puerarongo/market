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
  description: String;
  price: Number;
}

Notify.init({
  position: "right-bottom",
  timeout: 1500,
});

const ShopItem: React.FC<IShopItem> = ({
  id,
  image,
  title,
  description,
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
          description: description,
          price: price,
        })
      );
      Notify.success("Product added successfully");
    } else
      Notify.failure(
        "You must be logged in to your profile to add a product to your shopping cart."
      );
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={`${image}`} alt={`${id}`} />
      <div className={styles.detail}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{`Price: $ ${price}`}</p>
        <div className={styles.media}>
          <Button type="button" className={styles.detal__button}>
            <Link to={`/detail/${id}`} className={styles.detail__link}>
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
