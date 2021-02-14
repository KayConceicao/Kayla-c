import React from "react";

// Components
import AboutSection from "../Components/AboutSection";
import Experience from "../Components/Experience";
import ServiceSection from "../Components/ServiceSection";
import Contact from "../Pages/Contact";


const AboutMe = () => {
  return (
    <div>
      <AboutSection/>
      <ServiceSection/>
      <Experience/>
      <Contact/>
    </div>
  );
};
export default AboutMe;