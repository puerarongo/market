import React, { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/operation/data-operation";
//import { getDetailData } from "../../services/apiData";
import { useSelector, useDispatch } from "react-redux";

const ProductPage: React.FC = () => {
  const [detail, setDetail] = useState<any>("");
  const dispatch = useDispatch();
  const page = useSelector((state: any) => state.data);
  const id: String | undefined = useParams().productId;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (page.results) {
      const data = page.results.find((el: any) => {
        return el.id === Number(id);
      });
      setDetail(data);
    }
  }, [page.results, id]);

  return (
    <>
      {detail ? (
        <div className={styles.container}>
          <div className={styles.img__container}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt={`${detail.id}`}
            />
          </div>
          <div className={styles.description__container}>
            <h2 className={styles.title}>{detail.title}</h2>
            <p className={styles.description}>{detail.overview}</p>
            <p className={styles.price}>$ {detail.vote_count}</p>
            <Button variant="success" type="button">
              Add to basket
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h2>This product does not exist</h2>
        </div>
      )}
    </>
  );
};

export default ProductPage;
