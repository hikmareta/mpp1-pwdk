import React from "react";
import styles from "../../style/EventDashboardDetails.module.css";
const EventCard = () => {
  return (
    <div className={styles.eventCard}>
      <img
        src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg"
        alt=""
      />
      <div style={{padding:'1em'}}>
        <p>IDR 1.000.000</p>
        <p>Event Title Lorem Ipsum is simply dummy text of</p>
        <p>01 Sept 2023</p>
        <p>19.00 - 22.00 WIB</p>
        <p>Jakarta, DKI Jakarta</p>
      </div>
    </div>
  );
};

export default EventCard;
