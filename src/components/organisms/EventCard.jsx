import React from "react";
const EventCard = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white shadow-lg rounded-xl">
      <img
        className="w-full object-cover h-[50%]"
        src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg"
        alt=""
      />
      <div className="flex flex-col p-4 gap-y-2">
        <p className="font-medium text-primaryColor text-xl">IDR 1.000.000</p>
        <p className="font-semibold text-black">Event Title Lorem Ipsum is simply dummy text of</p>
        <p>01 Sept 2023</p>
        <p>19.00 - 22.00 WIB</p>
        <p>Jakarta, DKI Jakarta</p>
      </div>
    </div>
  );
};

export default EventCard;
