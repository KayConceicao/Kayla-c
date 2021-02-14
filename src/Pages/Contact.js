import React from "react";

// Styles
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactStyle>
      <h3>Contact me</h3>
      <p><a href="javascript:location='mailto:\u006b\u0061\u0079\u006c\u0061\u0063\u0072\u006f\u0061\u006c\u0039\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">Email me</a> to learn more about my services or to see if I am aviliable to build your site.</p>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  padding: 3rem;
  margin: 2rem 0;
  background: #c2c5db;
  color: #1f1e1e;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 7rem;
    height: 100%;
    left: -7rem;
    top: 0;
    background: #c2c5db;
  }

  a {
    color: #6A5ACD;
    text-decoration: none;
    font-family: 'Roboto Slab';
    font-weight: lighter;
    :hover {
      text-decoration: underline #1f1e1e;
    }

  }

  @media only screen and (min-width: 760px) {
  padding: 3rem;
  padding-bottom: 5rem;
  margin: 7rem;
  margin-bottom: 0;
  }

`;

export default Contact;