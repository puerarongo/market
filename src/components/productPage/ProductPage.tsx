import React, { useEffect } from "react";
import styles from "./ProductPage.module.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOneItem } from "../../redux/operation/data-operation";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../../redux/slices/basketSlice";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import defaultImg from "../../services/defaultPicture";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state: any) => state.data);
  const user = useSelector((state: any) => state.user.user);
  const id: String | undefined = useParams().productId;

  useEffect(() => {
    dispatch(getOneItem(id));
  }, [dispatch, id]);

  const addToBasket = () => {
    if (user) {
      dispatch(
        basketActions.addProduct({
          id: detail.id,
          image: detail.thumbnail,
          title: detail.title,
          overview: detail.description,
          price: detail.price,
        })
      );
      Notify.success("Product added successfully");
    } else
      Notify.failure(
        "You must be logged in to your profile to add a product to your shopping cart."
      );
  };

  return (
    <>
      {detail ? (
        <div className={styles.container}>
          <div className={styles.img__container}>
            <img
              className={styles.image}
              src={detail.thumbnail ? `${detail.thumbnail}` : defaultImg}
              alt={`${detail.id}`}
            />
          </div>
          <div className={styles.description__container}>
            <h2 className={styles.title}>{detail.title}</h2>
            <p className={styles.description}>{detail.description}</p>
            <p className={styles.price}>Price: $ {detail.price}</p>
            <Button variant="success" type="button" onClick={addToBasket}>
              Add to basket
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.empty__container}>
          <h2 className={styles.empty__title}>This product does not exist</h2>
        </div>
      )}
    </>
  );
};

export default ProductPage;
