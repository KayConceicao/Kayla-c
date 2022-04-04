import React from "react";
import { motion } from "framer-motion";

// Styles
import "./Styles/Budapest.scss";

// Images
import Header from "./Img/Budapest/header.JPG";
import Graphic1 from "./Img/Budapest/graphic-1.jpg";
import Graphic2 from "./Img/Budapest/graphic-2.jpg";
 

const Budapest = () => {

    return (
      <motion.div exit={{ opacity: 0 }} className="budapest-page">

        <div className="header top-bottom-padding">
          <div className="forty-width light-blue-bg one-padding hundheight flex-end">
            <h1>Budapest</h1>
            <p>This is a page I designed with the images I took on my travels to Budapest.</p>
          </div>
          
          <div className="sixity-width">  
          <img  src={Header} alt="header"/>
          </div>
        </div>

        <div className="full-side-by-side top-bottom-margin2">
          <div className="thirty-width">
            <img  src={Graphic1} alt="Window with a castle style building inside"/>
          </div>
          <div className="seventy-width three-padding">
            <h2>Suspendisse</h2>
            <p> Nunc mattis non metus vitae sollicitudin. Donec semper finibus nibh ut auctor. Morbi sed ipsum at diam semper faucibus at sed massa. Integer sit amet orci vitae sem congue consequat. Nam ac lorem eget risus pellentesque porttitor. Praesent ut lorem ac tortor consequat lobortis. Nulla massa massa, viverra non auctor at, pretium at justo. Sed egestas nulla dui, a pretium nulla tempor vel.<br /><br />Vivamus lobortis quis erat quis mattis. Ut orci felis, mollis a rutrum nec, interdum ac ligula. Praesent pulvinar sem elit, ut egestas orci pellentesque pulvinar. Etiam condimentum aliquet nibh ut tincidunt. Nunc id tristique leo, sed maximus lectus. Praesent commodo nisi nec dui consectetur, id congue magna consequat. Curabitur imperdiet ipsum eu consequat tempor.<br /><br />Aliquam in finibus arcu. Suspendisse sed fermentum lorem, quis auctor massa. Cras eget efficitur felis. Etiam tristique mi at turpis porta fringilla. Proin finibus enim et dictum pulvinar.<br /><br />Nam rhoncus enim vel est pellentesque, sed varius nisl facilisis. Aenean rhoncus augue et dolor laoreet tempor. Cras quis dolor quis nulla pharetra porta et eget urna. Cras non purus ex. Phasellus at maximus nunc. Ut finibus neque sit amet risus malesuada, in porttitor lorem tempus. </p>
          </div>
        </div>

        <div className="two-padding dark-green-bg top-bottom-margin">
          <div className="eightyFive-side-by-side">
            <div className="fifty-width one-padding">
              <h3>Vestibulum hendrerit auctor</h3>
              <p>Aliquam in finibus arcu. Suspendisse sed fermentum lorem, quis auctor massa. Cras eget efficitur felis. Etiam tristique mi at turpis porta fringilla. Proin finibus enim et dictum pulvinar.<br /><br />Nam rhoncus enim vel est pellentesque, sed varius nisl facilisis. Aenean rhoncus augue et dolor laoreet tempor. Cras quis dolor quis nulla pharetra porta et eget urna. Cras non purus ex. Phasellus at maximus nunc. Ut finibus neque sit amet risus malesuada, in porttitor lorem tempus. </p>
            </div>
            <div className="fifty-width">
              <div  className="off-light-green">
                <img src={Graphic2} alt="Statue"/>  
              </div>
            </div>
          </div>
        </div>

        <div className="two-padding top-bottom-margin2 off-dark-blue">
          <div className="eightyFive-side-by-side center-text center-alignment">
            <h4>Curabitur</h4>
            <p>Donec blandit nisi a lacus viverra faucibus. Phasellus et cursus nisi. Suspendisse lectus dolor, commodo sed augue commodo, hendrerit auctor tellus. Nullam lorem nibh, interdum sit amet imperdiet sit amet, pulvinar sit amet sem. Pellentesque vehicula efficitur facilisis. Vivamus non metus porta, varius risus sit amet, dictum odio. Integer consectetur congue enim eu finibus. In scelerisque aliquam tempus.<br /><br />Nunc mattis non metus vitae sollicitudin. Donec semper finibus nibh ut auctor. Morbi sed ipsum at diam semper faucibus at sed massa. Integer sit amet orci vitae sem congue consequat. Nam ac lorem eget risus pellentesque porttitor. Praesent ut lorem ac tortor consequat lobortis. Nulla massa massa, viverra non auctor at, pretium at justo. Sed egestas nulla dui, a pretium nulla tempor vel.</p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default Budapest;