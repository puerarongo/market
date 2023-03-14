import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./ShopPagination.module.css";

interface IPagination {
  pageCount: number;
  handleFunc: any;
}

const ShopPagination: React.FC<IPagination> = ({ handleFunc, pageCount }) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handleFunc}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<"
      />
    </div>
  );
};

export default ShopPagination;
