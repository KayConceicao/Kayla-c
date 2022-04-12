import React, {useState} from "react";

// Styles
import "./Styles/figma-design-page.scss";
import "./Styles/Design1.scss";

// Images
import HomeDesktop from "./Img/FigmaDesign1/HomeScreen.png"
import SearchFilter from "./Img/FigmaDesign1/searchFilter.png"
import Header from "./Img/FigmaDesign1/Header.png";
import Promotion from "./Img/FigmaDesign1/Promotion.png";
import SaleItems from "./Img/FigmaDesign1/SaleItems.png";
import BlogScreen from "./Img/FigmaDesign1/BlogScreen.png";
import Mob_display from "./Img/FigmaDesign1/Mob_display.png";
import PlaceOrder from "./Img/FigmaDesign1/PlaceOrder.png";
import OrderStatus from "./Img/FigmaDesign1/OrderStatus.png";
import OrderError from "./Img/FigmaDesign1/OrderError.png";
import OrderTracking from "./Img/FigmaDesign1/OrderTracking.png";
import Mob_order from "./Img/FigmaDesign1/Order_mob.png";

const FigmaDesign1 = () => {

    const [zoomedIn1, setIsZoomedIn1] = useState(false);
    const [zoomedIn2, setIsZoomedIn2] = useState(false);
    const [zoomedIn3, setIsZoomedIn3] = useState(false);
    const [zoomedIn4, setIsZoomedIn4] = useState(false);
    const [zoomedIn5, setIsZoomedIn5] = useState(false);
    const [zoomedIn6, setIsZoomedIn6] = useState(false);
    const [zoomedIn7, setIsZoomedIn7] = useState(false);
    const [zoomedIn8, setIsZoomedIn8] = useState(false);
    const [zoomedIn9, setIsZoomedIn9] = useState(false);
    const [zoomedIn10, setIsZoomedIn10] = useState(false);

    return (
      <div className="page-bg">
        <div className="design-page design-1">
        
          {/* Header */}
          <div className="full-side-by-side center-alignment">
              <div className="design-title mid-desk-fifty-width ">
                <p className="subtitle">Learning how to use Figma</p>
                <h1 className="title">Design 1: E-commerce Page</h1>
                <p>This was the first design I made using Figma. I used an e-commerce site as a base so that I could learn the features Figma has to offer.</p>
                <p>I gave myself prompts to work from such as Mobile friendly, how placing a order will look and how to attract a younger demographic with blogs about product.</p>
              </div>

              <div className="fifty-width mid-desk-fifty-width">
                <img class="half-margin" src={HomeDesktop} alt="A snapshot of the design described"/>
              </div>
          </div>

          {/* Colors and Fonts */}
          <div className="full-side-by-side bottom-two-padding center-alignment">
              {/* Colors */}
              <div className="fifty-width">
                  <div >
                    <h4 className="design-sub-header">Primary colors</h4>
                    <div className="full-side-by-side bottom-one-padding ">
                      <div className="color-box color1 inverse-text">#2F3B18</div> 
                      <div className="color-box color2 inverse-text">#4E7F1C</div> 
                      <div className="color-box color3 inverse-text">#6D9826</div> 
                      <div className="color-box color4 inverse-text">#9DB03A</div>
                    </div>
                  </div>
                
                  <div className="bottom-two-padding">
                    <h5 className="design-sub-header">Secondary Colors</h5>
                    <div className="full-side-by-side">
                      <div className="color-box color5">#ECECEC</div> 
                      <div className="color-box color6 inverse-text">#7D7D7D</div> 
                      <div className="color-box color7 inverse-text">#D44338</div> 
                    </div>
                  </div>
              </div>

              {/* Fonts */}
              <div className="fifty-width desgin-font top-two-padding">
                  <h2 className=" design-header">Roboto - Bold 2rem</h2>
                  <h3 className="design-sub-header capped">Roboto - SemiBold 1rem</h3>
                  <p className="design-body">Roboto - Regular 1rem</p>
              </div>
          </div>
          
          {/* buttons */}
          <div className="top-two-padding bottom-two-padding full-side-by-side center-alignment ">
              <div className="thirty-width mob-center bottom-two-padding">
                  <h6 className="design-sub-header">Primary button</h6>
                  <div className="full-side-by-side mob-center top-one-padding">
                    <button className="quarter-margin button primary">Active</button>
                    <button className="quarter-margin button primary-hover">Hover</button>
                    <button className="quarter-margin button primary-selected">Selected</button>
                    <button className="quarter-margin button primary-disabled">Disabled</button>
                  </div>
              </div>

              <div className="thirty-width mob-center bottom-two-padding">
                  <h7 className="design-sub-header">Secondary button</h7>
                  <div className="full-side-by-side mob-center top-one-padding">
                    <button className="quarter-margin button secondary">Active</button>
                    <button className="quarter-margin button secondary-hover">Hover</button>
                    <button className="quarter-margin button secondary-selected">Selected</button>
                    <button className="quarter-margin button primary-disabled">Disabled</button>
                  </div>
              </div>

              <div className="thirty-width bottom-two-padding mob-center">  
                  <h8 className="design-sub-header ">Tertiary button</h8>
                  <div className="top-one-padding full-side-by-side mob-center">
                    <button className="quarter-margin button tertiary">Active</button>
                    <button className="quarter-margin button tertiary-hover">Hover</button>
                    <button className="quarter-margin button tertiary-selected">Selected</button>
                    <button className="quarter-margin button tertiary-disabled">Disabled</button>
                  </div>
              </div>
          </div>

          <div className="full-side-by-side">
              <div className="quarter-margin">
                  <p className="design-sub-header">Home Page for desktop</p>
                  <div className="full-side-by-side center-alignment">
                    
                    <button onClick={() => setIsZoomedIn1(!zoomedIn1)} className={`img-btn mob-desk-fifty-width ${zoomedIn1 ? 'full-width' : ''}`}>
                      <img src={Header} alt="" />
                    </button>
                    
                    <button onClick={() => setIsZoomedIn2(!zoomedIn2)} className={`img-btn mob-desk-fifty-width ${zoomedIn2 ? 'full-width' : ''}`}>
                      <img src={Promotion} alt="" />
                    </button>
                    <button onClick={() => setIsZoomedIn3(!zoomedIn3)} className={`img-btn mob-desk-fifty-width ${zoomedIn3 ? 'full-width' : ''}`}>
                      <img src={SaleItems} alt="" />
                    </button>
                    
                    <button onClick={() => setIsZoomedIn4(!zoomedIn4)} className={`img-btn mob-desk-fifty-width ${zoomedIn4 ? 'full-width' : ''}`}>
                      <img src={BlogScreen} alt="" />
                    </button>
                  </div>
              </div>

              <div className="full-side-by-side top-two-padding">
                    <button onClick={() => setIsZoomedIn5(!zoomedIn5)} className={`img-btn mob-desk-fifty-width ${zoomedIn5 ? 'full-width' : ''}`}>
                      <p className="design-sub-header">Mobile version</p><img src={Mob_display} alt="" />
                    </button>
                  
                    <button onClick={() => setIsZoomedIn6(!zoomedIn6)} className={`img-btn mob-desk-fifty-width ${zoomedIn6 ? 'full-width' : ''}`}>
                      <p className="design-sub-header">Search and Filter features</p><img src={SearchFilter} alt=""/>
                    </button>
              </div>

              <div className="top-two-padding">
                  <p className="design-sub-header">Placing an order for desktop</p>
                  <div className="full-side-by-side center-alignment">
                    <button onClick={() => setIsZoomedIn7(!zoomedIn7)} className={`img-btn mob-desk-fifty-width ${zoomedIn7 ? 'full-width' : ''}`}>
                      <div><p>The shopping basket</p><img src={PlaceOrder} alt=""/></div>
                    </button>
                    <button onClick={() => setIsZoomedIn8(!zoomedIn8)} className={`img-btn mob-desk-fifty-width ${zoomedIn8 ? 'full-width' : ''}`}>
                      <div><p>Order progress</p><img src={OrderStatus} alt=""/></div>
                    </button>
                    <button onClick={() => setIsZoomedIn9(!zoomedIn9)} className={`img-btn mob-desk-fifty-width ${zoomedIn9 ? 'full-width' : ''}`}>
                      <div><p>Error with order</p><img src={OrderError} alt=""/></div>
                    </button>
                    <button onClick={() => setIsZoomedIn10(!zoomedIn10)} className={`img-btn mob-desk-fifty-width ${zoomedIn10 ? 'full-width' : ''}`}>
                      <div><p>Tracking the order</p><img src={OrderTracking} alt=""/></div>
                    </button>
                  </div>
              </div>
              <div className="top-two-padding">
                <p className="design-sub-header">Placing an order for Mobile</p>
                <img src={Mob_order} alt="" />
              </div>  
          </div>
        </div>
      </div>
    );
  };
  
  export default FigmaDesign1;