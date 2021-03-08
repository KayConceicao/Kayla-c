import React from "react";

// styles
import styled from "styled-components";

// Components
import BespokeDev from "./BespokeDev";
import Consultant from "./Consultant";
import TemplateDev from "./TemplateDev";

const ServiceSection =() => {
  return (
    <Services>
        <div className='introText'>
          <h2>My services</h2>
          <p>I have passion for design and web coding which fuels my determination to learn and develop my skills. I like to use new trends and creative thinking to build websites.</p><p>Select the services to find out more about them.</p>
        </div>
        <Cards>
          <Consultant/>
          <BespokeDev/>
          <TemplateDev/>
        </Cards>
    </Services>
  )
};

const Services = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  text-align: center;

  @media only screen and (min-width: 760px) {
    flex-flow: wrap;
    padding: 3rem;

    .introText {
      width: 36%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  @media only screen and (min-width: 760px) {
    width: 60%;
  }
`;

export default ServiceSection;