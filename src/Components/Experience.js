import React from "react";

// Styles
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceStyle>
      <h3>My Experience</h3>
      <p>I have been in the developer field since 2015, working closely with Adapt (An eLearning Framework). I have grown passionate about the field and develop my skills, resulting in teaching myself HTML, CSS, JavaScript and React.<br /><br />Growing up I wanted to be a Interior Designer which changed to web design during my college art course. I feel this design background gives me a creative edge while coding websites. I bring an outside the box thought process whilst having the knoweldge of what's possible within the world of web design.</p>
    </ExperienceStyle>
  );
};

const ExperienceStyle = styled.div`
  padding: 1rem;
  margin: 2rem;
  border-left: solid 5px #6A5ACD;
  border-bottom: solid 5px #6A5ACD;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 7rem;
    height: 5px;
    right: -7rem;
    bottom: -5px;
    background-color: #6A5ACD;
  }

  @media only screen and (min-width: 760px) {
  padding: 3rem;
  margin: 7rem;
  }

`;

export default Experience;