import React, {useEffect} from "react";
import { BackButton } from "../atoms/BackButton";
import Chart from "../molecules/Chart";
import EventCard from "../organisms/EventCard";
import Container from "../atoms/Container";
import ModalPromo from "../organisms/ModalPromo";
import { useState } from "react";
import PromoCard from "../organisms/PromoCard";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const EventDashboardDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null)
  const param = useParams()
  useEffect(() => {
    const getEvents = async () => {
      try {
        let response = await axios.get('http://localhost:3000' + '/events/' + param.eventId)
        setData(response.data)
      }
      catch (e) {
          return e
      }
    }
    getEvents()
  }, [])
  return (
    <Container>
      <BackButton>Event Dashboard Details</BackButton>
      <div className="flex w-full gap-4 mb-8 max-md:flex-wrap">
        <div className="flex flex-col w-[65%] min-h-[40%] max-h-fit justify-between items-center max-md:w-full">
          <div className="w-full h-[90%] bg-white p-2 rounded-xl shadow-lg max-md:h-[300px]">
            <Chart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ticketSold" fill="#1450A3" />
              <Bar dataKey="stock" fill="#0faaaa" />
            </Chart>
          </div>
          <div className="flex w-full justify-end gap-x-4 mt-4 max-md:justify-center">
            <button className="bg-primaryColor text-white font-normal py-1 px-4 rounded">
              Edit Event
            </button>
            <button className="bg-transparent hover:bg-red-700 text-red-700 font-normal hover:text-white py-1 px-4 border border-red-700 hover:border-transparent rounded">
              Delete Event
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[35%] gap-y-4 min-h-[45%] max-md:w-full max-h-fit h-fit">
          <EventCard data={data}/>
          <PromoCard onClickAddPromo={() => setModalOpen(true)} />
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Transaction</h2>
      <div className="block overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-start">Date</th>
              <th className="px-4 py-2 text-start">Name</th>
              <th className="px-4 py-2 text-start">Email</th>
              <th className="px-4 py-2 text-start">Qty</th>
              <th className="px-4 py-2 text-start">Promo Code</th>
              <th className="px-4 py-2 text-start">Price</th>
              <th className="px-4 py-2 text-start">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-start w-30">1 Sept 23</td>
              <td className="px-4 py-2 text-start">Lorem Ipsum</td>
              <td className="px-4 py-2 text-start">LoremIpsum@gmail.com</td>
              <td className="px-4 py-2 text-start">3</td>
              <td className="px-4 py-2 text-start">-</td>
              <td className="px-4 py-2 text-start">IDR 1.000.000</td>
              <td className="px-4 py-2 text-start">IDR 3.000.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      {modalOpen && <ModalPromo onClickCancel={() => setModalOpen(false)} />}
    </Container>
  );
};

export default EventDashboardDetails;
