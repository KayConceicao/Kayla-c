
import React from "react";

// Pages / Components
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer"
// import Contact from "./Pages/Contact";

// Page transition
import { AnimatePresence } from "framer-motion";

// Animation
// import pageAnimation from "./Animation";

// Styles
import GlobalStyle from "./Components/GlobalStyle";


function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <AnimatePresence exitBeforeEnter>
        <AboutMe/>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
