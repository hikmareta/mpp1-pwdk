

const EventRegistration = () => {
  return (
    <>
            <section className="pt-14">
                <div className="container mx-auto">
                    <div className="md:grid md:grid-cols-2 gap-5 px-4">
                        <div>
                            <div className="mb-7 md:mb-0 shadow-lg p-7 rounded-lg">
                              <img src="/src/assets/img/coding-event.jpg" alt="event coding" className="rounded-2xl shadow-lg"/>
                              <h3 className="font-bold text-3xl text-primaryColor pt-5">Rp. 1.000.000</h3>
                              <h4 className="font-semibold text-2xl mt-4 mb-1 line-clamp-2 hover:line-clamp-none">Programming Itu Menyenangkan Bukan? Bukan! :D</h4>
                              <p className="text-slate-600 mb-1 line-clamp-2 hover:line-clamp-none">01 Sept 2023</p>
                              <p className="text-slate-600 font-semibold mb-1">19.00 - 22.00 WIB</p>
                              <p className="text-slate-600 font-semibold mb-1">Jakarta, DKI Jakarta</p>
                            </div>
                        </div>
                        <div className="border-2 p-8 rounded-lg shadow-lg">
                          <form action="">
                              <label className="mb-4 text-lg font-semibold" htmlFor="fullName">Full Name
                                <input className="font-normal text-base" type="text" placeholder="Input Full Name Here!" id="fullName"/>
                              </label>
                              <label className="mb-4 text-lg font-semibold" htmlFor="email">Email
                                <input className="font-normal text-base" type="email" placeholder="Input Email Here!" id="email"/>
                              </label>
                              <div>
                                <label className="mb-2 text-lg font-semibold" htmlFor="Quantity">Quantity</label>
                                <div className="flex items-center gap-1">
                                  <button
                                    type="button"
                                    className="w-8 h-8 leading-10 text-white rounded-lg bg-primaryColor hover:bg-blue-700"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    id="Quantity"
                                    value="1"
                                    className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                  />

                                  <button
                                    type="button"
                                    className="w-8 h-8 leading-10 text-white rounded-lg bg-primaryColor hover:bg-blue-700"
                                  >
                                    +
                                  </button>
                                </div>
                                <label className="mt-4 mb-4 text-lg font-semibold" htmlFor="promotion">Email
                                <input className="font-normal text-base" type="text" placeholder="Input Promotion Code Here!" id="promotion"/>
                                </label>
                                <div>
                                  <h3 className="text-md font-bold text-primaryColor mb-2">Price Detail</h3>
                                  <div className="flex flex-wrap justify-between leading-8">
                                      <p className="line-clamp-1">Pax X2</p>
                                      <p>IDR. 2.000.000</p>
                                  </div>
                                  <div className="flex flex-wrap justify-between">
                                      <p>Discount</p>
                                      <p>IDR. 200.000</p>
                                  </div>
                                  <hr className="mt-4 mb-4"/>
                                  <div className="flex flex-wrap justify-between">
                                      <div>
                                        <p className="text-primaryColor font-semibold">Total Payments</p>
                                        <p className="text-primaryColor font-bold text-2xl">IDR. 1.800.000</p>
                                      </div>
                                      <button className="bg-primaryColor text-white rounded-lg px-4 shadow-lg hover:bg-blue-700">Book Now</button>
                                  </div>
                                </div>
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default EventRegistration