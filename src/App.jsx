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
                <Route path="Kayla-c/" element={<Portfolio />} />
                <Route path="Kayla-c/AboutMe" element={<AboutMe />} />
                <Route path="Kayla-c/MediaPlayer" element={<MediaPlayer />} />
                <Route path="Kayla-c/TodoComp" element={<TodoComp />} />
                <Route path="Kayla-c/Budapest" element={<Budapest />} />
                <Route path="Kayla-c/Florence" element={<Florence />} />
                <Route path="Kayla-c/Maderia" element={<Maderia />} />
                <Route path="Kayla-c/FigmaDesign1" element={<FigmaDesign1 />} />
                <Route path="Kayla-c/FigmaDesign2" element={<FigmaDesign2 />} />
              </Routes>
              <Footer/>
            </Router> 
        }
    </div>
    
  );
}

export default App;
