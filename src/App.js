
import React from "react";

// Pages / Components
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";

// Page transition
import { AnimatePresence } from "framer-motion";

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
