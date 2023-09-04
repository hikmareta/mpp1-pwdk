import React from "react";
import styles from "../../style/EventDashboardDetails.module.css";
import { useState } from "react";
const PromoCard = (props) => {
  const [promo, setPromo] = useState(null);
  return (
    <div className={styles.promoCard}>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        Promotion Code
        {
            promo !== null ?
            <span>Remove</span>
            : <button className={styles.btnPrimary} style={{marginLeft:'5px'}} onClick={props.onClickAddPromo}>Add</button>
        }
      </p>
      {promo !== null ? (
        <>
          <p>Presale Disc 20%</p>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            1 Sept 2023 - 3 Sept 2023
            <span>Quota: 40/50</span>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default PromoCard;
