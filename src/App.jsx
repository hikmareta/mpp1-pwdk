import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import Home from "./components/pages/Home";
import NotFound from "./components/organisms/NotFound";
import Review from "./components/pages/Review";

function App() {
  return (
    <>
      <Navbar />
      <Review />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
