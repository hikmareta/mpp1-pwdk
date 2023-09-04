import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import Home from "./components/pages/Home";
import NotFound from "./components/organisms/NotFound";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ChooseRole from "./components/pages/ChooseRole";
import EventCreation from "./components/pages/EventCreation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/create-event" element={<EventCreation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
