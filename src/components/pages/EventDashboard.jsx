import React from "react";
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
      <div className="flex gap-4 h-auto min-h-[400px] max-md:flex-wrap">
        <div className="w-full min-w-[400px] bg-white p-5 rounded-xl shadow-lg max-md:min-w-full">
          <Chart data={data} />
        </div>
        <div className="flex flex-col justify-between gap-4 min-w-[300px] max-md:w-full max-md:min-w-full">
          <div className="flex-col rounded-lg h-[50%] justify-center items-center text-primaryColor bg-white flex rounded-lg shadow-lg max-md:p-2">
            <h3>Total Income</h3>
            <h1 className="font-semibold text-2xl max-sm:text-lg">IDR 2.000.000.000.000</h1>
          </div>
          <div className="flex flex-row gap-x-4 bg-none rounded-lg h-[50%]">
            <div className="flex flex-col justify-center items-center h-full w-6/12 rounded-lg text-primaryColor bg-white shadow-lg max-md:p-2">
              <h3>Tickets sold</h3>
              <h1 className="font-semibold text-2xl  max-sm:text-lg">5.000</h1>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-6/12 rounded-lg text-primaryColor bg-white shadow-lg max-md:p-2">
              <h3>Total Ticket</h3>
              <h1 className="font-semibold text-2xl  max-sm:text-lg">10.000</h1>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-2xl mt-10 mb-2">Your Events</h2>
      <div className="max-md:overflow-x-scroll px-3">
        <div className="flex flex-col">
          {data.map((data, idx) => {
            return (
              <div
                className="flex mb-3 bg-white p-3 items-center cursor-pointer rounded shadow-lg w-full max-md:w-[1000px] max-sm:flex-wrap max-sm:w-full"
                onClick={() => navigate("" + idx)}
                key={idx}
              >
                <img className="h-24 object-cover w-[15%] max-sm:w-full max-sm:h-1/2" src={data.imgUrl} alt="event-img" />
                <p className="flex flex-col font-regular w-full pl-4 max-sm:p-1 max-sm:text-sm">
                    Event Title
                    <span className="w-fit font-semibold">{data.name}</span>
                </p>
                <p className="flex flex-col font-regular w-full pl-4 max-sm:p-1 max-sm:text-sm">
                    Date
                    <span className="w-fit font-semibold">{data.startDate}</span>
                </p>
                <p className="flex flex-col font-regular w-full pl-4 max-sm:p-1 max-sm:text-sm">
                    Price
                    <span className="w-fit font-semibold">IDR {data.price}</span>
                </p>
                <p className="flex flex-col font-regular w-full pl-4 max-sm:p-1 max-sm:text-sm">
                    Stock
                    <span className="w-fit font-semibold">{data.ticketSold}/{data.stock}</span>
                </p>
                <p className="flex flex-col font-regular w-full pl-4 max-sm:p-1 max-sm:text-sm">
                    Status
                    <span className="w-fit font-semibold">{data.eventStatus ? "Active" : "End"}</span>
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
