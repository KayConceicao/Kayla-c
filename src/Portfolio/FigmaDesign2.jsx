import React, {useState} from "react";


// Styles
import "./Styles/figma-design-page.scss";
import "./Styles/Design2.scss";

// Images
import headerImg from "./Img/FigmaDesign2/header.png"
import homePage from "./Img/FigmaDesign2/home-page.png"
import home from "./Img/FigmaDesign2/home.png"
import searchResults from "./Img/FigmaDesign2/search-results.png"
import createMusic1 from "./Img/FigmaDesign2/create-music1.png"
import createMusic2 from "./Img/FigmaDesign2/create-music2.png"


// Icons
import playlist from "./Img/FigmaDesign2/playlist.png"
import mixer from "./Img/FigmaDesign2/mixer.png"
import settings from "./Img/FigmaDesign2/settings.png"
import search from "./Img/FigmaDesign2/search.png"
import soundwave from "./Img/FigmaDesign2/soundwave.png"
import speaker from "./Img/FigmaDesign2/speaker.png"
import mic from "./Img/FigmaDesign2/mic.png"


const FigmaDesign1 = () => {

  const [zoomedIn1, setIsZoomedIn1] = useState(false);
  const [zoomedIn2, setIsZoomedIn2] = useState(false);
  const [zoomedIn3, setIsZoomedIn3] = useState(false);
  const [zoomedIn4, setIsZoomedIn4] = useState(false);

    return (
      <div className="page-bg">
        <div className="design-page design-2">
        
          {/* Header */}
          <div className="full-side-by-side align-center ">
              <div className="center-alignment mid-desk-fifty-width">
                <div className="design-title">
                  <p className="subtitle">Learning how to use Figma</p>
                  <h1 className="title bottom-two-padding">Design 2: Music Mobile App</h1>
                  <p>This a mobile only App I designed in Figma.</p>
                  <p>I designed a feature that allows users to create their own music. I am especially happy with how the electronic sound board turned out as it mimics boards used by DJs.</p>
                </div>
              </div>

              <div className="fifty-width">
                <img className="half-margin" src={headerImg} alt="A snapshot of the design described"/>
              </div>
          </div>

          <div className="full-side-by-side">
            <div className="top-two-padding fifty-width">
              {/* Colors */}
              <div className="bottom-one-padding">
                <h4 className="design-sub-header">Primary colors</h4>
                <div className="full-side-by-side">
                  <div className="color-box color1 inverse-text">#222831</div> 
                  <div className="color-box color2 inverse-text">#393E46</div> 
                  <div className="color-box color3 inverse-text">#00ADB5</div> 
                  <div className="color-box color4">#E3EBEB</div>
                </div>
              </div>

              {/* Fonts */}
              <div className="desgin-font top-two-padding ">
                  <h2 className="design-header">Roboto - Bold 2rem</h2>
                  <h3 className="design-sub-header capped">Roboto - SemiBold 1rem</h3>
                  <p className="design-body">Roboto - Regular 1rem</p>
              </div>

            </div>  

            {/* Icons */}
            <div className="top-two-padding bottom-two-padding fifty-width">
                <div className="mob-center bottom-two-padding">
                    <h6 className="design-sub-header">Icons</h6>
                    <div className="full-side-by-side center-alignment mob-center">
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={home} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={playlist} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={mixer} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={settings} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={search} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={soundwave} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={mic} alt="" /></div>
                      <div className="color1 inverse-text two-padding half-margin mob-twenty-width"><img src={speaker} alt="" /></div>
                    </div>
                </div>
            </div>
          </div>

          <div className="full-side-by-side top-two-padding">
              <div className="quarter-margin">
                  <p className="design-sub-header">The loading screen and Home page</p>
                  <div className="full-side-by-side center-alignment">
                    
                    <button onClick={() => setIsZoomedIn1(!zoomedIn1)} className={`img-btn forty-width ${zoomedIn1 ? 'full-width' : ''}`}>
                      <img src={homePage} alt="" />
                    </button>
                    
                    <button onClick={() => setIsZoomedIn2(!zoomedIn2)} className={`img-btn sixity-width ${zoomedIn2 ? 'full-width' : ''}`}>
                      <img src={searchResults} alt="" />
                    </button>

                  </div>
              </div>

              <div className="quarter-margin">
                  <p className="design-sub-header">Create your own music</p>
                  <div className="full-side-by-side center-alignment">
                    
                    <button onClick={() => setIsZoomedIn3(!zoomedIn3)} className={`img-btn mob-desk-fifty-width ${zoomedIn3 ? 'full-width' : ''}`}>
                      <img src={createMusic1} alt="" />
                    </button>
                    
                    <button onClick={() => setIsZoomedIn4(!zoomedIn4)} className={`img-btn mob-desk-fifty-width ${zoomedIn4 ? 'full-width' : ''}`}>
                      <img src={createMusic2} alt="" />
                    </button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FigmaDesign1;