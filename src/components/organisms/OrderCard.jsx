import React from "react";
import styles from "../../style/Orderlist.module.css";
const OrderCard = (props) => {
    const data = props.data
  return (
    <div className={styles.orderCard}>
      <img src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg" />
      <div className={styles.descWrapper}>
        <div className={styles.desc}>
          <p>{data?.name}</p>
          <p>{data?.start_date}</p>
          <p>
            {data?.qty}pax<span>IDR {data?.price}</span>
          </p>
        </div>
        <div className={styles.summary}>
          <p>IDR {data?.price*data?.qty}</p>
          {data.status && <button className={styles.btnReview}>Review</button>}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
