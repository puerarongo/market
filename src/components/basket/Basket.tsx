import React from "react";
import styles from "./Basket.module.css";
import BasketItem from "./baksetItem/BasketItem";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Basket: React.FC = () => {
  const items = useSelector((state: any) => state.basket);

  console.log("BASKET INTO", items);
  return (
    <div className={styles.container}>
      <ul className={styles.basket__list}>
        {items.basketItems.length > 0 ? (
          <>
            <li className={styles.basket__title}>Your shopping basket</li>
            {items.basketItems.map(
              ({ id, image, title, quantity, totalPrice }: any) => {
                return (
                  <li className={styles.item} key={id}>
                    <BasketItem
                      id={id}
                      image={image}
                      title={title}
                      quantity={quantity}
                      price={totalPrice}
                    />
                  </li>
                );
              }
            )}
            <li className={styles.buy__cintainer}>
              <h3
                className={styles.total__quantity}
              >{`Total Quantity of Products: ${items.totalQuantity} pcs`}</h3>
              <h3
                className={styles.total__amount}
              >{`Total Amount: $ ${items.totalAmount}`}</h3>
              <Button type="button" className={styles.button}>
                Buy
              </Button>
            </li>
          </>
        ) : (
          <li className={styles.basket__empty}>
            <h2 className={styles.empty__title}>Basket is currently empty!</h2>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Basket;
