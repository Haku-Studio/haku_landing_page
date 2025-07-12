/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Caroussel from "./components/Home/base/Carousel/Caroussel";
import CustomCursor from "./components/base/CustomCursor";
import SwipeCarousel from "./components/Home/base/Carousel/SwipeCarousel";
import HakuCarousel from "./components/Home/base/Carousel/hakuCarousel";

function App() {
  return (
    <div className=" font-gt ">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <CustomCursor /> */}
        <HakuCarousel />
        {/* <SwipeCarousel /> */}
        {/* <Caroussel /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes> */}
        {/* <Footer /> */}
      </BrowserRouter>
     </div>
  );
}

export default App;
