import React from "react";
import { Link } from 'react-router-dom';
import EmailLink from "./EmailLink";


// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {



  return (
    <div className="mainFooter">
      <p>Check out my social media to find out more about me.</p>

      <div>
        <Link to={{pathname: "http://www.linkedin.com/in/kayla-conceicao-081813107"}} target="_blank"><FontAwesomeIcon className="contactIcon" icon={faLinkedinIn} /></Link>
        <Link to={{pathname: "https://www.instagram.com/kk_lah97/"}} target="_blank"><FontAwesomeIcon className="contactIcon" icon={faInstagram} /></Link>
        <Link to={{pathname: "https://github.com/KayConceicao"}} target="_blank"><FontAwesomeIcon className="contactIcon" icon={faGithub} /></Link>
        <EmailLink label={[<FontAwesomeIcon className='contactIcon' icon={faEnvelope} />]} />
      </div>
    </div>
  );
};

export default Footer;