import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global css
import "./global.scss";
// components
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs";
import MenuItem from "./components/MenuItem/MenuItem";
import Special from "./components/Special/Special";
import Events from "./components/Events/Events";
import Booking from "./components/BookTable/Booking";
import Testimonial from "./components/Testimonial/Testimonial";
import Gallery from "./components/Gallery/Gallery";
import Chefs from "./components/Chefs/Chefs";
import ContactUs from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
// simple react lightbox
import SimpleReactLightbox from "simple-react-lightbox";

const App = () => {
  return (
    <>
      <Banner />
      <About />
      <WhyUs />
      <MenuItem />
      <Special />
      <Events />
      <Booking />
      <Testimonial />
      <SimpleReactLightbox>
        <Gallery />
      </SimpleReactLightbox>
      <Chefs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
