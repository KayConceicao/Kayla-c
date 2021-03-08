import React from "react";

// Styles
import styled from "styled-components";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";




const Footer = () => {
  return (
    <FooterStyle>
      <p>Want to know more? Check out my social media</p>

      <div>
        <a href="http://www.linkedin.com/in/kayla-conceicao-081813107" target="_blank"><FontAwesomeIcon className="contactIcon" icon={faLinkedinIn} /></a>
        <a href="https://www.instagram.com/kk_lah97/" target="_blank"><FontAwesomeIcon className="contactIcon" icon={faInstagram} /></a>
        <a href="https://github.com/KayConceicao" target="_blank"><FontAwesomeIcon className="contactIcon" icon={faGithub} /></a>
        <a href="javascript:location='mailto:\u006b\u0061\u0079\u006c\u0061\u0063\u0072\u006f\u0061\u006c\u0039\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"><FontAwesomeIcon className="contactIcon" icon={faEnvelope} /></a>
      </div>
    </FooterStyle>
  );
};


const FooterStyle = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
  padding: 1rem 3rem;
  background: #282828;
  color: #fff;
  text-align: center;

  .contactIcon {
    margin: 0 0.5rem;
    padding: 0.2rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      color: #6A5ACD;
    }
  }


`;


export default Footer;