import React from "react";
import styles from "../../style/EventDashboardDetails.module.css";

const ModalPromo = (props) => {
  return (
    <div className={styles.backDrop}>
      <form>
        <div className={styles.modalPromo}>
          <h2
            style={{ fontSize: "1.5em", fontWeight: "600", color: "#1450A3" }}
          >
            Promotion
          </h2>
          <label>
            Promotion Code
            <input type="input"></input>
          </label>
          <label>
            Start Date
            <input type="date"></input>
          </label>
          <label>
            End Date
            <input type="date"></input>
          </label>
          <label>
            Discount
            <input type="number"></input>
          </label>
          <label>
            Quota
            <input type="number"></input>
          </label>
          <div className={styles.btnWrapper}>
            <button className={styles.btnSecondary} onClick={() => {}}>
              Add
            </button>
            <button className={styles.btnPrimary} onClick={props.onClickCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalPromo;
