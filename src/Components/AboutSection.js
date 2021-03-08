import React from "react";

// styles
import styled from "styled-components";

// Animations
import KIconAnimation from "../Components/IconAnimation";

// Images
import ProfilePic from "../img/profile_pic.jpg";


const AboutSection = () => {
  return (
    <HeaderLayout>
      <Bio>
        <KIconAnimation/>
        <div>
          <h2>Front End Developer</h2>
        </div>
      </Bio>

      <Image>
        <img src={ProfilePic} alt="Kayla"/>
      </Image>

    </HeaderLayout>
  );
};

export const HeaderLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 1rem;
  text-align: center;

  @media only screen and (min-width: 760px) {
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    padding: 3rem 3rem 3rem 0;
  }
`;

export const Bio = styled.div`
  color: #282828;
  z-index: 2;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media only screen and (min-width: 760px) {
    width: 50%;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  margin: 3rem 0;
  position: relative;

  @media only screen and (min-width: 760px) {
    width: 35%;
    margin: 0;
  }
  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }
`;

export default AboutSection;