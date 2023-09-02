const EventCategory = () => {

    return (
      <>
          <section className="bg-white pt-32">
            <div className="container mx-auto px-5 text-center">
                <h4 className=" font-semibold text-xl text-primaryColor mb-4">Our Category</h4>
                <h2 className=" text-3xl font-bold text-black lg:text-5xl mb-6 lg:mb-10">Pelajari Skills Baru Sesuai Dengan Minatmu</h2>
                <p className="w-full lg:w-[40%] text-black mx-auto mb-6 lg:mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste, commodi tempora laudantium velit non nam laboriosam maiores! Beatae, cum?</p>
              <div className="flex flex-wrap gap-10 justify-center">
                    <div className="bg-[url('/src/assets/img/hero-image.webp')] bg-no-repeat bg-cover rounded-xl w-[300px] h-[350px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                        <h2 className="font-semibold text-2xl text-white relative top-[80%] line-clamp-6 px-3">Web Development</h2>
                    </div>
                    <div className="bg-[url('/src/assets/img/hero-image.webp')] bg-no-repeat bg-cover rounded-xl w-[300px] h-[350px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                        <h2 className="font-semibold text-2xl text-white relative top-[80%] line-clamp-6 px-3">UIUIX</h2>
                    </div>
                    <div className="bg-[url('/src/assets/img/hero-image.webp')] bg-no-repeat bg-cover rounded-xl w-[300px] h-[350px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                        <h2 className="font-semibold text-2xl text-white relative top-[80%] line-clamp-6 px-3">Graphic Design</h2>
                    </div>
                    <div className="bg-[url('/src/assets/img/hero-image.webp')] bg-no-repeat bg-cover rounded-xl w-[300px] h-[350px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                        <h2 className="font-semibold text-2xl text-white relative top-[80%] line-clamp-6 px-3">Product Management</h2>
                    </div>
              </div>
            </div>
          </section>
      </>
    )
  }
  
  export default EventCategory