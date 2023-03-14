import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/operation/data-operation";
import ShopItem from "./shopItem/ShopItem";
import { Form } from "react-bootstrap";

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.data.products);
  const [sorted, setSorted] = useState<{}[]>(data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setSorted(data);
  }, [data]);

  const selectHandler = (e: any) => {
    let newSort: {}[];
    if (e.target.value === "large")
      newSort = [...data].sort((a: any, b: any) => b.price - a.price);
    else if (e.target.value === "smallest")
      newSort = [...data].sort((a: any, b: any) => a.price - b.price);
    else newSort = data;
    setSorted(newSort);
  };

  return (
    <div className={styles.shop__container}>
      <div className={styles.select__container}>
        <p className={styles.select__text}>Sorting products: </p>
        <Form.Select
          className={styles.select}
          size="lg"
          onChange={selectHandler}
        >
          <option> - </option>
          <option value="large">Sort from large</option>
          <option value="smallest">Sort from smallest</option>
        </Form.Select>
      </div>
      <ul className={styles.list__grid}>
        {sorted ? (
          sorted.map(({ id, title, price, thumbnail, description }: any) => {
            return (
              <li className={styles.item} key={id}>
                <ShopItem
                  id={id}
                  image={thumbnail}
                  title={title}
                  description={description}
                  price={price}
                />
              </li>
            );
          })
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
