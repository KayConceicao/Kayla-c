
import React from "react";

// Pages / Components
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";

// Page transition
import { AnimatePresence } from "framer-motion";

// Styles
import "./styles/app.scss";


function App() {

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <AboutMe/>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
