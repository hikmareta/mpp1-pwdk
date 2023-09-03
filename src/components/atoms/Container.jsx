import React from "react";
import styles from '../../style/EventDashboard.module.css'
const Container = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
