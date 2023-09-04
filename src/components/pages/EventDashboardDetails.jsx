import React from "react";
import styles from "../../style/EventDashboardDetails.module.css";
import { BackButton } from "../atoms/BackButton";
import Chart from "../molecules/Chart";
import EventCard from "../organisms/EventCard";
import Container from "../atoms/Container";
import ModalPromo from "../organisms/ModalPromo";
import { useState } from "react";
import PromoCard from "../organisms/PromoCard";
const data = [
  {
    name:"Lorem Ipsum Event1",
    startDate: "1 Sept 23",
    endDate:"2 Sept 23",
    price: 240000,
    ticketSold:200,
    stock: 2400,
    imgUrl:"https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus:true,
  },
  {
    name:"Lorem Ipsum Event2",
    startDate: "2 Sept 23",
    endDate:"2 Sept 23",
    price: 100000,
    ticketSold:4000,
    stock: 4000,
    imgUrl:"https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus:true,
  },
  {
    name:"Lorem Ipsum Event3",
    startDate: "1 Sept 23",
    endDate:"5 Sept 23",
    price: 1500000,
    ticketSold:400,
    stock: 2400,
    imgUrl:"https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus:true,
  },
  {
    name:"Lorem Ipsum Event4",
    startDate: "3 Sept 23",
    endDate:"3 Sept 23",
    price: 500000,
    ticketSold:100,
    stock: 2400,
    imgUrl:"https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus:true,
  },
];
const EventDashboardDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <BackButton>Event Dashboard Details</BackButton>
      <div className={styles.section1}>
        <div className={styles.section1Left}>
          <div className={styles.chartWrapper}>
            <Chart data={data} />
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.btnPrimary}>Edit Event</button>
            <button className={styles.btnDanger}>Delete Event</button>
          </div>
        </div>
        <div className={styles.section1Right}>
          <EventCard />
          <PromoCard onClickAddPromo={() => setModalOpen(true)} />
        </div>
      </div>
      <h2 style={{ fontSize: "1.5em", fontWeight: "600" }}>Transaction</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Qty</th>
              <th>Promo Code</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Sept 23</td>
              <td>Lorem Ipsum</td>
              <td>LoremIpsum@gmail.com</td>
              <td>3</td>
              <td>-</td>
              <td>IDR 1.000.000</td>
              <td>IDR 3.000.000</td>
            </tr>
          </tbody>
        </table>
      {modalOpen && <ModalPromo onClickCancel={() => setModalOpen(false)} />}
    </Container>
  );
};

export default EventDashboardDetails;
