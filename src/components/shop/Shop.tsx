import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/operation/data-operation";
import ShopItem from "./shopItem/ShopItem";
import { Form } from "react-bootstrap";

// ? Component
import Loader from "../loader/Loader";
import ShopPagination from "./shopPagination/ShopPagination";

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  let { total, products } = useSelector((state: any) => state.data);
  const [sorted, setSorted] = useState<{}[]>(products);

  // *
  const [pageCount, setPageCount] = useState(0);
  const [postOffSet, setPostOffSet] = useState(0);
  const postPerPage = 12;

  useEffect(() => {
    dispatch(getData(postOffSet));
    setPageCount(Math.ceil(total / postPerPage) % total);
  }, [dispatch, postOffSet, total]);

  useEffect(() => {
    setSorted(products);
  }, [products]);

  //*
  const handlePageClick = (event: any) => {
    const newOffSet = (event.selected * postPerPage) % total;
    setPostOffSet(newOffSet);
  };
  // *

  const selectHandler = (e: any) => {
    let newSort: {}[];
    if (e.target.value === "large")
      newSort = [...products].sort((a: any, b: any) => b.price - a.price);
    else if (e.target.value === "smallest")
      newSort = [...products].sort((a: any, b: any) => a.price - b.price);
    else newSort = products;
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

      {sorted ? (
        <>
          <ul className={styles.list__grid}>
            {sorted.map(({ id, title, price, thumbnail, description }: any) => {
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
            })}
          </ul>
          <ShopPagination handleFunc={handlePageClick} pageCount={pageCount} />
        </>
      ) : (
        <div className={styles.nothing__container}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Shop;
