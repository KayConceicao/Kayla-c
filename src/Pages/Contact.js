import React from "react";
import EmailLink from "../Components/EmailLink";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact me</h3>
      <p><EmailLink label="Email me">Email me</EmailLink> to learn more about my services or to see if I am aviliable to build your site.</p>
    </div>
  );
};

export default Contact;