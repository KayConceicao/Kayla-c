import React from "react";
import { motion } from "framer-motion";

// Components
import AboutSection from "../Components/AboutSection";
import Experience from "../Components/Experience";
import ServiceSection from "../Components/ServiceSection";
import Contact from "./Contact";

// images
import img2 from "../img/Img_2.jpg";


const AboutMe = () => { 
  return (
    <motion.div exit={{ opacity: 0 }} className="main-background-color">
      <AboutSection/>
      <div className="side-by-side">
        <div className="half-width"><ServiceSection/></div>
        <div className="half-width"><Experience/></div>
      </div>
      <Contact/>
    </motion.div>
  );
};
export default AboutMe;