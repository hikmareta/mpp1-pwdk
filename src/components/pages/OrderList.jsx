import React, { useState, useEffect } from "react";
import Container from "../atoms/Container";
import { BackButton } from "../atoms/BackButton";
import OrderCard from "../organisms/OrderCard";
const dataBase = [
  {
    name: "Event Title Lorem Ipsum",
    start_date: "01 Sep 2023",
    qty: 2,
    status: false,
    price: 1000000,
  },
  {
    name: "Event Title Lorem Ipsum 2",
    start_date: "05 Sep 2023",
    qty: 1,
    status: false,
    price: 500000,
  },
  {
    name: "Event Title Lorem Ipsum 3",
    start_date: "03 Sep 2023",
    qty: 4,
    status: false,
    price: 200000,
  },
];
const dataBase2 = [
  {
    name: "Event Title Lorem Ipsum 0",
    start_date: "01 Jul 2023",
    qty: 2,
    status: true,
    price: 1000000,
  },
  {
    name: "Event Title Lorem Ipsum 10",
    start_date: "05 Aug 2023",
    qty: 1,
    status: true,
    price: 500000,
  },
];
const OrderList = () => {
  const [tabBarSelected, setTabBarSelected] = useState(true);
  const [data, setData] = useState(dataBase);
  useEffect(() => {
    function getData() {
      tabBarSelected ? setData(dataBase) : setData(dataBase2);
    }
    getData();
  }, [tabBarSelected]);

  const onClickOrderList = () => {
    setTabBarSelected(true);
  };
  const onClickDone = () => {
    setTabBarSelected(false);
  };
  return (
    <Container>
      <BackButton>Your Orders</BackButton>
      <div className="flex mb-5 gap-x-6">
        <button
          className={
            !tabBarSelected ? "bg-transparent font-semibold" : "bg-transparent font-semibold text-primaryColor border-b-2 border-primaryColor"
          }
          onClick={() => onClickOrderList()}
        >
          Order List
        </button>
        <button
          className={
            tabBarSelected ? "bg-transparent font-semibold" : "bg-transparent font-semibold text-primaryColor border-b-2 border-primaryColor"
          }
          onClick={() => onClickDone()}
        >
          Done
        </button>
      </div>
      {data.map((dt, idx) => {
        return <OrderCard key={idx} data={dt} />;
      })}
    </Container>
  );
};

export default OrderList;
