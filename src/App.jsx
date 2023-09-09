import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import Home from "./components/pages/Home";
import NotFound from "./components/organisms/NotFound";
import EventDashboard from "./components/pages/EventDashboard";
import EventDashboardDetails from "./components/pages/EventDashboardDetails";
import OrderList from "./components/pages/OrderList";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ChooseRole from "./components/pages/ChooseRole";
import EventDetail from "./components/pages/EventDetail";
import ExploreEvent from "./components/pages/ExploreEvent";
import EventCreation from "./components/pages/EventCreation";
import Review from "./components/pages/Review";
import EventRegistration from "./components/pages/EventRegistration";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<EventDashboard />} />
        <Route path="/dashboard/:eventId" element={<EventDashboardDetails />}/>
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
        <Route path="/explore" element={<ExploreEvent />} />
        <Route path="/create-event/:id" element={<EventCreation />} />
        <Route path="/order-list/:orderId/review" element={<Review />} />
        <Route path="/:id/registration" element={<EventRegistration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
