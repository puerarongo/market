import React, { useEffect } from "react";
import styles from "./Basket.module.css";
import BasketItem from "./baksetItem/BasketItem";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { basketActions } from "../../redux/slices/basketSlice";
import { personalActions } from "../../redux/slices/personalSlice";
import { setDoc, updateDoc, doc, increment } from "firebase/firestore";
import { db } from "../firebase";
import addBuyCheck from "../../services/addBuyCheck";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.basket);
  const personal = useSelector((state: any) => state.personal);
  const user = useSelector((state: any) => state.user);

  //useEffect(() => {
  //  console.log("useEffect personal", personal.allProducts);
  //  try {
  //    setDoc(
  //      doc(db, "users", user.user),
  //      {
  //        allProducts: personal.allProducts,
  //        allAmount: personal.allAmount,
  //        allQuantity: personal.allQuantity,
  //      },
  //      { merge: true }
  //    );
  //  } catch (err: any) {
  //    console.log(err);
  //  }
  //  console.log("!");
  //}, [personal, user]);

  const someFunction = () => {
    try {
      const { basketItems, totalAmount, totalQuantity } = items;
      console.log("BASKET", basketItems);
      const newItems = {
        allProducts: addBuyCheck(basketItems),
        allAmount: totalAmount,
        allQuantity: totalQuantity,
      };
      console.log("mewItems", newItems);

      dispatch(basketActions.allDelete());
      dispatch(personalActions.addBuy(newItems));
      updateDoc(doc(db, "users", user.user), {
        allProducts: newItems.allProducts,
        allAmount: increment(newItems.allAmount),
        allQuantity: increment(newItems.allQuantity),
      });
    } catch (err: any) {
      console.log(err);
    }
  };

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
              <Button
                type="button"
                className={styles.button}
                onClick={someFunction}
              >
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
