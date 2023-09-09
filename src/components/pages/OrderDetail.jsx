import EventCard from "../organisms/EventCard";
import { useLocation } from "react-router-dom";
import { currencyFormat } from "../../utils/formatter";
import { BackButton } from "../atoms/BackButton";
import Container from "../atoms/Container";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const data = {
  name: "Lorem Ipsum Event1",
  start_date: "1 Sept 23",
  end_date: "2 Sept 23",
  start_time: "19.00",
  end_time: "20.00",
  price: 1000000,
  location: "DKI Jakarta",
  img_url:
    "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
  desc: "lorem ipsum bla bla bla description",
  ticketSold: 200,
  stock: 2400,
  eventStatus: true,
};
const EventRegistration = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <div className="flex mb-5 gap-x-6">
        <div className="container mx-auto min-h-screen">
          <BackButton>Your Orders</BackButton>
          <div className="md:grid md:grid-cols-2 gap-5 px-4">
            <div className="max-w-full">
              <EventCard data={location.state.dataEvents} />
              {location.state.dataTrans.review !== '' && (
                <div className="border-2 p-8 rounded-xl shadow-lg mt-5 max-md:mt-5 border-primaryColor">
                  <h1 className="flex justify-between items-center text-lg font-bold text-primaryColor mb-2">
                    Your Review
                    <div className="flex">
                      <AiFillStar className="mr-1 fill-yellow-500 h-[20px] w-[20px]" />
                      <p className="text-base font-medium">5/5</p>
                    </div>
                  </h1>
                  <p>{location.state.dataTrans.review}</p>
                </div>
              )}
            </div>
            <div className="border-2 p-8 rounded-xl shadow-lg max-md:mt-5 border-primaryColor">
              <h1 className="text-lg font-bold text-primaryColor mb-2">
                Price Detail
              </h1>
              <h1 className="font-normal text-base">Full Name</h1>
              <p className="mb-4 text-base font-semibold">
                {location.state.dataTrans.name}
              </p>
              <h1 className="font-normal text-base">Email</h1>
              <p className="mb-4 text-base font-semibold">
                {location.state.dataTrans.email}
              </p>
              <h1 className="font-normal text-base">Qty</h1>
              <p className="mb-4 text-base font-semibold">
                {location.state.dataTrans.qty}
              </p>
              <h1 className="font-normal text-base">Your Referral Code</h1>
              <p className="mb-4 text-base font-semibold text-primaryColor">
                {location.state.dataTrans.referral_code}
              </p>
              <h1 className="font-normal text-base">Promotion Code</h1>
              <p className="mb-4 text-base font-semibold">
                {location.state.dataTrans.promo_code}
              </p>
              <div>
                <h3 className="text-md font-bold text-primaryColor mb-2">
                  Price Detail
                </h3>
                <div className="flex flex-wrap justify-between leading-8">
                  <p className="line-clamp-1">
                    Pax x{location.state.dataTrans.qty}
                  </p>
                  <p>
                    {currencyFormat(
                      location.state.dataTrans.qty *
                        location.state.dataEvents.price
                    )}
                  </p>
                </div>
                <div className="flex flex-wrap justify-between">
                  <p>Discount</p>
                  <p>{(0).toLocaleString("id-ID")}</p>
                </div>
                <hr className="mt-4 mb-4" />
                <div className="flex flex-wrap justify-between">
                  <div>
                    <p className="text-primaryColor font-semibold">
                      Total Payments
                    </p>
                    <p className="text-primaryColor font-bold text-xl">
                      {currencyFormat(
                        location.state.dataTrans.qty *
                          location.state.dataEvents.price
                      )}
                    </p>
                  </div>
                  {new Date(location.state.dataEvents.end_date) >=
                    new Date() && (
                    <button
                      className="w-24 bg-primaryColor p-1 rounded text-white self-end"
                      onClick={props.onClickReview}
                    >
                      Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventRegistration;
