import React from "react";

// Animations
import KIconAnimation from "../Components/IconAnimation";

// Images
import ProfilePic from "../img/profile_pic.jpg";

const AboutSection = () => {
  return (
    <div className="headerLayout">
      <div className="bio">
        <KIconAnimation/>
        <div>
          <h2>Front End Developer</h2>
        </div>
      </div>

      <div className="profilePic">
        <img src={ProfilePic} alt="Kayla"/>
      </div>

    </div>
  );
};

export default AboutSection;