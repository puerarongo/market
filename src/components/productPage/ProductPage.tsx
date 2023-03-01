import React, { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDetailData } from "../../services/apiData";

const ProductPage: React.FC = () => {
  const [detail, setDetail] = useState<any>("");
  const id: String | undefined = useParams().productId;

  useEffect(() => {
    getDetailData(id)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("This movie is not in the database");
        }
        console.log("PAGE", response.data);
        setDetail(response.data);
      })
      .catch((error) => setDetail(error));
  }, [id]);

  return (
    <>
      {detail ? (
        <div className={styles.container}>
          <div className={styles.img__container}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
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
