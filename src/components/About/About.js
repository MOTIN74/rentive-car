import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";
import News from "../News/News";

const About = () => {
  return (
    <div>
      <Menubar />
      <News />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default About;
