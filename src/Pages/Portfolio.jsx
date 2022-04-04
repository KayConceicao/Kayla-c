import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";

// Images
import Budapest from "../img/budapest_thumbnail.jpg";
import Maderia from "../img/maderia_thumbnail.jpg";
import Media from "../img/media_thumbnail.jpg";
import Florence from "../img/florence_thumbnail.jpg";
import Figma1 from "../img/figma1_thumbnail.jpg";
import Figma2 from "../img/figma2_thumbnail.png";
import gfx_by_ray from "../img/gfx_by_ray_thumbnail.png";
import TodoImg from "../img/todo_list_thumbnail.png";


const Portfolio = () => {

    return (
        <motion.div exit={{ opacity: 0 }} className="portfolio-container main-background-color">
          <h2>Welcome to my portfolio</h2>
          
          <h3>Figma Designs</h3>
          <p>This is a collection of designs I created while learning how to use Figma.</p>
          <div className="portfolio-inner">
            <Link to="/FigmaDesign1" className="portfolio-item">
              <div>
                <img src={Figma1} alt="Thumbnail of the Figma design 1 page"/>
              </div>
            </Link>
            <Link to="/FigmaDesign2" className="portfolio-item">
              <div>
                <img src={Figma2} alt="Thumbnail of the Figma design 2 page"/>
              </div>
            </Link>
          </div>

          <h3>React Designs</h3>
          <p>This is a collection of designs I built with React.</p>
            <div className="portfolio-inner">
              <Link to="/Budapest" className="portfolio-item">
                <div>
                  <img src={Budapest} alt="Thumbnail of the Budapest design"/>
                </div>
              </Link>
            
              <Link to="/Maderia" className="portfolio-item">
                <div>
                  <img src={Maderia} alt="Thumbnail of the Maderia design"/>
                </div>
              </Link>

              <Link to="/Florence" className="portfolio-item">
                <div>
                  <img src={Florence} alt="Thumbnail of the Florence design"/>
                </div>
              </Link>
            </div>

          <h3>React Components</h3>
          <p>This is a collection of react components I built.</p>
            <div className="portfolio-inner">
              <Link to="/MediaPlayer" className="portfolio-item">
                <div>
                  <img src={Media} alt="Thumbnail of the Media Player"/>
                </div>
              </Link>
              <Link to="/TodoComp" className="portfolio-item">
                <div>
                  <img src={TodoImg} alt="Thumbnail of the To do list"/>
                </div>
              </Link>
              <a href="https://kayconceicao.github.io/Gfx-by-ray/" rel="noreferrer" target="_blank" className="portfolio-item">
                <div>
                  <img src={gfx_by_ray} alt="Thumbnail of graphics by Ray site"/>
                </div>
              </a>
            </div>
      </motion.div>
    );
  };
  
  export default Portfolio;