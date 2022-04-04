import React from "react";

import PrivacyNotice from "./PrivacyNotice";


// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  return (
    <div>
      <PrivacyNotice />
      <div className="main-footer">
        <div>
        <a href="http://www.linkedin.com/in/kayla-conceicao-081813107" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} /></a>
        <a href="https://www.instagram.com/kk_lah97/" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="contact-icon" icon={faInstagram} /></a>
        <a href="https://github.com/KayConceicao" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="contact-icon" icon={faGithub} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;