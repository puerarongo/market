import React from "react";
import { useSelector } from "react-redux";
import styles from "./Personal.module.css";
import IProductsFirebase from "../../services/interface/productsFirebase.interface";
//import IPersonalFirebase from "../../services/interface/personalFirebase.interface";
import PersonalItem from "./personalItem/PersonalItem";

const Personal: React.FC = () => {
  const { allQuantity, allAmount, allProducts } = useSelector(
    (state: any) => state.personal
  );
  const { email, isReady } = useSelector((state: any) => state.user);

  return (
    <div className={styles.container}>
      {isReady ? (
        <>
          <h2 className={styles.personal__title}>
            Hello {email}, this is your purchase history
          </h2>
          <ul className={styles.personal__list}>
            {allProducts.length > 0 ? (
              <>
                {allProducts.map(
                  ({
                    id,
                    image,
                    title,
                    quantity,
                    totalPrice,
                  }: IProductsFirebase) => {
                    return (
                      <li className={styles.personal__item} key={`${id}`}>
                        <PersonalItem
                          id={id}
                          image={image}
                          title={title}
                          quantity={quantity}
                          totalPrice={totalPrice}
                        />
                      </li>
                    );
                  }
                )}
                <li className={styles.personal__total}>
                  <h3
                    className={styles.total__quantity}
                  >{`Total Quantity of Products: ${allQuantity} pcs`}</h3>
                  <h3
                    className={styles.total__amount}
                  >{`Total Amount: $ ${allAmount}`}</h3>
                </li>
              </>
            ) : (
              <li className={styles.personal__item}>
                <p className={styles.personal__empty}>
                  You don't have a purchase history yet
                </p>
              </li>
            )}
          </ul>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Personal;
