
const EventDetail = () => {
  return (
        <>
            <section className="pt-14">
                <div className="container mx-auto">
                    <div className="flex flex-wrap md:grid md:grid-cols-2 gap-5 px-4">
                        <div className="w-full">
                            <img src="/src/assets/img/hero-image.webp" alt="gambar event" className="rounded-xl hover:drop-shadow-2xl"/>
                        </div>
                        <div>
                        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                >
                                <dt className="text-md font-medium text-gray-900">Judul Kegiatan</dt>
                                <dd className="text-gray-700 sm:col-span-2">Programming Itu Menyenangkan Bukan? Bukan!</dd>
                                </div>

                                <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                >
                                <dt className="text-md font-medium text-gray-900">Deskripsi</dt>
                                <dd className="text-gray-700 sm:col-span-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nobis obcaecati ad non quis maxime eaque exercitationem ratione sunt. Consectetur repudiandae ea laboriosam reprehenderit doloremque dolor porro esse maxime veniam dignissimos nesciunt labore expedita numquam sunt, consequuntur delectus doloribus blanditiis, fugiat natus architecto nam nulla. Perferendis laudantium delectus porro reprehenderit.</dd>
                                </div>

                                <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                >
                                <dt className="text-md font-medium text-gray-900">Tanggal</dt>
                                <dd className="text-gray-700 sm:col-span-2">30 Februari 2025</dd>
                                </div>

                                <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                >
                                <dt className="text-md font-medium text-gray-900">Biaya</dt>
                                <dd className="text-gray-700 sm:col-span-2">Gratis Tapi Bayar Sedikit</dd>
                                </div>
                            </dl>
                            </div>
                            <button className="bg-primaryColor text-white rounded-lg py-2 px-28 hover:shadow-2xl mt-5">Beli Tiket</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventDetail