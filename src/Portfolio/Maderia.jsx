import React from "react";
import { motion } from "framer-motion";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-brands-svg-icons";

// Styles
import "./Styles/Maderia.scss";

// Images
import Header from "./Img/Maderia/header.jpg";
import Graphic1 from "./Img/Maderia/graphic_1.jpg";
import Graphic2 from "./Img/Maderia/graphic_2.jpg";
import Graphic3 from "./Img/Maderia/graphic_3.jpg";
import Graphic4 from "./Img/Maderia/graphic_4.jpg";
import Graphic5 from "./Img/Maderia/graphic_5.jpg";
import Graphic6 from "./Img/Maderia/graphic_6.jpg";
import Graphic7 from "./Img/Maderia/graphic_7.jpg";
import { faMapMarkedAlt, faMountain, faWalking } from "@fortawesome/free-solid-svg-icons";


const Maderia = () => {

    return (
      <motion.div exit={{ opacity: 0 }} >
        
        <div className="maderia-header">
          <div className="header-img">
            <img  src={Header} alt="header"/>
          </div>

          <div className="">
            <div className="light-grey-bg header-text">
              <p className="subtitle"><b>Nam eget arcu ornare iaculis enim</b></p>
              <h1>Maderia</h1>
              <p>Suspendisse mattis leo arcu, in tincidunt massa placerat vel.</p>
            </div>
          </div>
        </div>

        <div className="top-bottom-margin2 two-padding page-margin">
          <div className="left-green-border">
            <h2>Praesent diam nibh</h2>
            <p>Vivamus lobortis quis erat quis mattis. Ut orci felis, mollis a rutrum nec, interdum ac ligula. Praesent pulvinar sem elit, ut egestas orci pellentesque pulvinar. Etiam condimentum aliquet nibh ut tincidunt. Nunc id tristique leo, sed maximus lectus. Praesent commodo nisi nec dui consectetur, id congue magna consequat. Curabitur imperdiet ipsum eu consequat tempor. Aliquam in finibus arcu. Suspendisse sed fermentum lorem, quis auctor massa. Cras eget efficitur felis. Etiam tristique mi at turpis porta fringilla. Proin finibus enim et dictum pulvinar.</p>
          </div>
        </div>

        <div className="full-side-by-side center-alignment align-start">
          <div className="thirty-width one-padding">
            <img  src={Graphic1} alt="Lavadas"/>
            <p className="caption-subtitle"><b>Aenean</b></p>
            <p>Nunc id tristique leo, sed maximus lectus. Praesent commodo nisi nec dui consectetur, id congue magna consequat.</p>
          </div>

          <div className="thirty-width one-padding">
            <img  src={Graphic2} alt="La"/>
            <p className="caption-subtitle"><b>Suspendisse</b></p>
            <p>Donec eleifend finibus nibh eu aliquam. Donec ipsum commodo nisi egestas interdum non a lectus. Integer iaculis egestas dignissim.</p>
          </div>

          <div className="thirty-width one-padding">
            <img  src={Graphic3} alt="La"/>
            <p className="caption-subtitle"><b>Commodo </b></p>
            <p>Nulla massa massa, viverra non auctor at, pretium at justo. Sed egestas nulla dui, a pretium nulla tempor vel.</p>
          </div>
        </div>

        <div className="dark-green-bg top-bottom-margin2 ">
          <div className="eightyFive-side-by-side center-alignment center-text two-padding">
            <h2>Nullam eleifend non sapien</h2>
            <p>Nam eget arcu ornare, iaculis enim quis, varius ligula. Suspendisse mattis leo arcu, in tincidunt massa placerat vel. Nunc mattis non metus vitae sollicitudin. Donec semper finibus nibh ut auctor. Morbi sed ipsum at diam semper faucibus at sed massa. Integer sit amet orci vitae sem congue consequat. Nam ac lorem eget risus pellentesque porttitor. Praesent ut lorem ac tortor consequat lobortis. Nulla massa massa, viverra non auctor at, pretium at justo. Sed egestas nulla dui, a pretium nulla tempor vel.</p>
          </div>

        </div>

        <div className="full-side-by-side center-alignment align-start">
          
          <div className="thirty-width one-padding "> 
            <div className="icon-bullets"><FontAwesomeIcon className="caption-subtitle twenty-width" icon={faMapMarkedAlt} /><p className="eighty-width">Nunc id tristique leo, sed maximus lectus. Praesent commodo nisi nec dui consectetur, id congue magna consequat.</p></div>
            
            <div className="icon-bullets"><FontAwesomeIcon className="caption-subtitle twenty-width" icon={faMountain} /><p className="eighty-width">Praesent pulvinar sem elit, ut egestas orci pellentesque pulvinar. Etiam condimentum aliquet nibh ut tincidunt. Nunc id tristique leo, sed maximus lectus. Praesent commodo nisi nec dui consectetur, id congue magna consequat. </p></div>
            
            <div className="icon-bullets"><FontAwesomeIcon className="caption-subtitle twenty-width" icon={faWalking} /><p className="eighty-width">Curabitur imperdiet ipsum eu consequat tempor. Aliquam in finibus arcu. Suspendisse sed fermentum lorem, quis auctor massa. Cras eget efficitur felis. Etiam tristique mi at turpis porta fringilla.</p></div>
          </div>

          <div className="thirty-width one-padding">
            <img className="object-fit" src={Graphic4} alt="La"/>
          </div>

          <div className="thirty-width one-padding">
            <img  src={Graphic5} alt="La"/>
            <img className="top-bottom-margin" src={Graphic6} alt="La"/>
            <img  src={Graphic7} alt="La"/>
          </div>
        </div>

      </motion.div>
    );
  };
  
  export default Maderia;