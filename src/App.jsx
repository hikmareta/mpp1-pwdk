import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import Home from './components/pages/Home'
import NotFound from './components/organisms/NotFound'
import EventDetail from './components/pages/EventDetail'

function App() {
  return (
    <>
    <Navbar/ >
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/event' element={<EventDetail />} />
    </Routes> 
    <Footer />
    </>
   )
}

export default App
