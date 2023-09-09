import { Link } from "react-router-dom";

const EventCreation = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 style={{ fontSize: "50px", fontFamily: "Poppins" }}>
              Create your first event for{" "}
              <p className="text-7xl font-bold text-pink-600">FREE</p>
            </h1>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="event-title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                      <input
                        type="text"
                        name="event-title"
                        id="event-title"
                        autoComplete="event-title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Event Title"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="date">
                    Date
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Date"
                    type="Date"
                    id="date"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Location"
                    type="loc"
                    id="location"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="event-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Event Photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="photo-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span> Upload a Photo </span>
                        <input
                          id="photo-upload"
                          name="photo-upload"
                          type="photo"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1"> or drag and drop </p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="free-event"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="free-event"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Free Event </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="paid-event"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="paid-event"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Paid Event </span>
                  </label>
                </div>
              </div>

              <label
                htmlFor="price"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span class="text-xs font-medium text-gray-700">
                  {" "}
                  Event Price{" "}
                </span>

                <input
                  type="price"
                  id="eventprice"
                  placeholder="e.g 150000"
                  class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
              </label>

              <div>
                <label className="sr-only" htmlFor="message">
                  Event Description
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Event Description"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  <Link to="/:id/dashboard/:eventID"> Create Event </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCreation;
