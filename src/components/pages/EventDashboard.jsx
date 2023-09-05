import React from "react";
import styles from "../../style/EventDashboard.module.css";
import { BackButton } from "../atoms/BackButton";
import Chart from "../molecules/Chart";
import Container from "../atoms/Container";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Lorem Ipsum Event1",
    startDate: "1 Sept 23",
    endDate: "2 Sept 23",
    price: 240000,
    ticketSold: 200,
    stock: 2400,
    imgUrl:
      "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus: true,
  },
  {
    name: "Lorem Ipsum Event2",
    startDate: "2 Sept 23",
    endDate: "2 Sept 23",
    price: 100000,
    ticketSold: 4000,
    stock: 4000,
    imgUrl:
      "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus: true,
  },
  {
    name: "Lorem Ipsum Event3",
    startDate: "1 Sept 23",
    endDate: "5 Sept 23",
    price: 1500000,
    ticketSold: 400,
    stock: 2400,
    imgUrl:
      "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus: true,
  },
  {
    name: "Lorem Ipsum Event4",
    startDate: "3 Sept 23",
    endDate: "3 Sept 23",
    price: 500000,
    ticketSold: 100,
    stock: 2400,
    imgUrl:
      "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    eventStatus: true,
  },
];

const EventDasboard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackButton>Event Dashboard</BackButton>
      <div className={styles.chartContainer}>
        <div className={styles.chartWrapper}>
          <Chart data={data} />
        </div>
        <div className={styles.statWrapper}>
          <div className={styles.incomeWrap}>
            <h3>Total Income</h3>
            <h1 className={styles.statValue}>IDR 2.000.000.000.000</h1>
          </div>
          <div className={styles.ticketWrap}>
            <div className={styles.ticketVal}>
              <h3>Tickets sold</h3>
              <h1 className={styles.statValue}>5.000</h1>
            </div>
            <div className={styles.ticketVal}>
              <h3>Total Ticket</h3>
              <h1 className={styles.statValue}>10.000</h1>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-2xl mt-5 mb-2">Your Events</h2>
      <div className={styles.eventContainer}>
        <div className={styles.titleWrapper}>
          <p className={styles.textDetails}>Event Title</p>
          <p className={styles.textDetails}>Date</p>
          <p className={styles.textDetails}>Price</p>
          <p className={styles.textDetails}>Stock</p>
          <p className={styles.textDetails}>Status</p>
        </div>
        <div className={styles.eventsWrapper}>
          {data.map((data, idx) => {
            return (
              <div
                className={styles.listWrapper}
                onClick={() => navigate("" + idx)}
                key={idx}
              >
                <img className={styles.eventImg} src={data.imgUrl} />
                <p className={styles.textDetails}>{data.name}</p>
                <p className={styles.textDetails}>{data.startDate}</p>
                <p className={styles.textDetails}>IDR{data.price}</p>
                <p className={styles.textDetails}>
                  {data.ticketSold}/{data.stock}
                </p>
                <p className={styles.textDetails}>
                  {data.eventStatus ? "Active" : "End"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default EventDasboard;
