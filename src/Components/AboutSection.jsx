import React from "react";

// Animations
import KIconAnimation from "./IconAnimation";

// Images
import ProfilePic from "../img/profile_pic.jpg";

const AboutSection = () => {
  return (
    <div className="header-layout">
      <div className="bio">
        <KIconAnimation/>
        <div>
          <h2>Front End Developer</h2>
        </div>
      </div>

      <div className="profile-pic">
        <img src={ProfilePic} alt="Kayla"/>
      </div>

    </div>
  );
};

export default AboutSection;