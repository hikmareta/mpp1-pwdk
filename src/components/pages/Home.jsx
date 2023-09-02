import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero'
import EventCategory from '../organisms/EventCategory'
import Footer from '../organisms/Footer'
import FeaturedEvent from '../organisms/FeaturedEvents'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <EventCategory></EventCategory>
    <FeaturedEvent></FeaturedEvent>
    <Footer></Footer>
    </>
  )
}

export default Home