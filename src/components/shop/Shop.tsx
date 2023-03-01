import React, { useEffect } from "react";
import styles from "./Shop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/operation/data-operation";
import ShopItem from "./shopItem/ShopItem";

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className={styles.shop__container}>
      <ul className={styles.list__grid}>
        {data.results !== undefined ? (
          data.results.map(
            ({ id, title, vote_count, poster_path, overview }: any) => {
              return (
                <li className={styles.item} key={id}>
                  <ShopItem
                    id={id}
                    image={poster_path}
                    title={title}
                    overview={overview}
                    price={vote_count}
                  />
                </li>
              );
            }
          )
        ) : (
          <li>
            <h2>Nothing</h2>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Shop;
