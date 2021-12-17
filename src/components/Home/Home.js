import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import Misson from "../Mission/Misson";
import News from "../News/News";
import ReviewHeader from "../ReviewHeader/ReviewHeader";
import Services from "../Services/Services";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import SliderReview from "../SliderReview/SliderReview";

const Home = () => {
  return (
    <div>
      <Menubar />
      <Banner />
      <Misson />
      <Services />
      <Works />
      <Contact />
      <ChooseUs />
      <ReviewHeader />
      <SliderReview />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
