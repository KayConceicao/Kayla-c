import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages / Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import AboutMe from "./Pages/AboutMe";
import Loader from "./Components/loader";

// Portfolio
import Portfolio from "./Pages/Portfolio";
import MediaPlayer from "./Portfolio/Media/MediaPlayer";
import TodoComp from "./Portfolio/TodoComp/TodoComp";
import Budapest from "./Portfolio/Budapest";
import Florence from "./Portfolio/Florence";
import Maderia from "./Portfolio/Maderia"; 
import FigmaDesign1 from "./Portfolio/FigmaDesign1";
import FigmaDesign2 from "./Portfolio/FigmaDesign2";
// Styles
import "./styles/app.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout (() => {
      setIsLoading(false);
    }, 2500);
  })

  return (
    <div>
        {isLoading===true?
          <Loader />:
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/MediaPlayer" element={<MediaPlayer />} />
                <Route path="/TodoComp" element={<TodoComp />} />
                <Route path="/Budapest" element={<Budapest />} />
                <Route path="/Florence" element={<Florence />} />
                <Route path="/Maderia" element={<Maderia />} />
                <Route path="/FigmaDesign1" element={<FigmaDesign1 />} />
                <Route path="/FigmaDesign2" element={<FigmaDesign2 />} />
              </Routes>
              <Footer/>
            </Router> 
        }
    </div>
    
  );
}

export default App;
