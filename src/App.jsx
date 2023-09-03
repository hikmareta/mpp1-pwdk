import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import Home from './components/pages/Home'
import NotFound from './components/organisms/NotFound'
import EventDashboard from './components/pages/EventDashboard'
import EventDashboardDetails from './components/pages/EventDashboardDetails'

function App() {
  return (
    <>
    <Navbar/ >
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id/dashboard' element={<EventDashboard />} />
        <Route path='/:id/dashboard/:eventID' element={<EventDashboardDetails />} />
        <Route path='*' element={<NotFound />} />
    </Routes> 
    <Footer />
    </>
   )
}

export default App
