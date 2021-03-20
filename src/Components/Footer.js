import React from "react";


// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mainFooter">
      <p>Check out my social media to find out more about me.</p>

      <div>
        <a href="http://www.linkedin.com/in/kayla-conceicao-081813107" target="_blank"><FontAwesomeIcon className="contactIcon" icon={faLinkedinIn} /></a>
        <a href="https://www.instagram.com/kk_lah97/" target="_blank"><FontAwesomeIcon className="contactIcon" icon={faInstagram} /></a>
        <a href="https://github.com/KayConceicao" target="_blank"><FontAwesomeIcon className="contactIcon" icon={faGithub} /></a>
        <a href="javascript:location='mailto:\u006b\u0061\u0079\u006c\u0061\u0063\u0072\u006f\u0061\u006c\u0039\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"><FontAwesomeIcon className="contactIcon" icon={faEnvelope} /></a>
      </div>
    </div>
  );
};

export default Footer;