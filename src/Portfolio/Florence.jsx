import React from "react";
import { motion } from "framer-motion";

// Styles
import "./Styles/Florence.scss";

// images 
import David from "./Img/Florence/David.jpg";
import Florence01 from "./Img/Florence/florence_01.jpg";
import Florence02 from "./Img/Florence/florence_02.jpg";
import Florence03 from "./Img/Florence/florence_03.jpg";
import Florence04 from "./Img/Florence/florence_04.jpg";
import Florence05 from "./Img/Florence/florence_05.jpg";
import Florence06 from "./Img/Florence/florence_06.jpg";
import Florence07 from "./Img/Florence/florence_07.jpg";

const Florence = () => {

    return (
      <motion.div exit={{ opacity: 0 }} className="florence-page">
        
        <div className="florence-header">
          <div className="header-headshot">
            <img src={David} alt="Kayla"/>
          </div>
          <div className="header-text">
            <h2>Florence Page</h2>
            <p>Vivamus dapibus dignissim ex vitae facilisis. Duis id lorem eu lacus rhoncus ultricies. Nunc bibendum lorem lorem, sed dignissim velit consectetur vel. Curabitur eros sapien, sagittis eget dictum ac, commodo in quam.  </p>
          </div>
        </div>

        <div className="center-row">
          <div className="fifty-width">
            <h3>Porttitor viverra</h3>
            <p>Suspendisse pretium posuere nulla, id pulvinar ante tincidunt vitae.Praesent ullamcorper, lectus dignissim ullamcorper tristique, felis mi euismod ante, at gravida erat ex ac ex. Integer ut eleifend orci, in iaculis sapien. Sed luctus mi vitae enim pellentesque feugiat.<br/><br />Proin suscipit, est a tincidunt facilisis, orci sem rutrum enim, at pharetra nunc sem nec sem. Vivamus rutrum efficitur mi at accumsan. Nunc accumsan consequat nulla sed mollis. Donec diam nibh, ultricies eu facilisis at, placerat eu dui.<br/><br/>Maecenas maximus pellentesque feugiat. Etiam in quam hendrerit, semper turpis et, sodales nisi. Suspendisse sed pretium tellus. Integer commodo, tellus at accumsan varius, nunc enim euismod risus, eu placerat augue urna sit amet mauris. Maecenas nec semper lorem.</p>
          </div>

          <div className="vintage-border fifty-width" >
            <img src={Florence01} alt="Florence Duomo"/>
          </div>

        </div>

        
        <div className="center-row">
          <div className="vintage-border sixity-width" >
            <img src={Florence02} alt="Outside of a cinema"/>
          </div>

          <div className="thirty-width">
            <div>
              <img src={Florence05} alt="close up of a statue on the duomo"/>
            </div>
            <p className="colored-caption" > Ut porta suscipit tortor non aliquam. Vestibulum efficitur at sapien in molestie.</p>
          </div>
        </div>

      
        <div className="green-text-box">
          <p>Curabitur tincidunt porta porta. Quisque rhoncus ut libero vel mollis. Phasellus eget aliquam arcu. Nulla hendrerit at mi nec laoreet. Aenean dignissim elementum lobortis. Nam auctor, massa rhoncus dapibus varius, nisl felis rhoncus diam, sed dictum risus lorem in nulla.<br /><br />Pellentesque sit amet finibus libero. Pellentesque dignissim dictum est. Quisque ultricies tempor purus, eget placerat enim tempor a. Suspendisse bibendum elit in odio rhoncus congue. Aenean viverra malesuada lacus eu hendrerit. <br /><br />Nunc imperdiet, dui eget luctus vulputate, sapien lorem molestie lorem, id dapibus eros purus ac sem. Etiam blandit, tellus nec pretium rhoncus, tortor ante faucibus urna, ornare consectetur est ligula eu turpis. Morbi ac nibh sit amet ex sollicitudin rutrum eu sit amet quam. Suspendisse scelerisque sollicitudin libero nec tincidunt.</p>
        </div>

        <div className="photo-gallery">
          <div className="end-row">
            <div className="large-size">
              <img src={Florence03} alt="Florence Duomo"/>
            </div>

            <div className="small-size">
              <img src={Florence04} alt="Florence Duomo"/>
            </div>
          </div>

          <div className="start-row">
            <div className="small-size">
              <img src={Florence06} alt="Florence Duomo"/>
            </div>

            <div className="large-size">
              <img src={Florence07} alt="Florence Duomo"/>
            </div>
          </div>
        </div>


      </motion.div>
    );
  };
  
  export default Florence;