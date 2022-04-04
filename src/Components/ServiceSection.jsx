import React from "react";
import { useState } from "react";

// Animation
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSwatchbook, faCode } from "@fortawesome/free-solid-svg-icons";

const ServiceSection =() => {
  return (
    <div className="services  ">
        <div className='intro-text'>
          <h2>Freelance services</h2>
          <p>Select the services to find out more about them.</p>
        </div>
        <div className="serve-cards">
        <AnimateSharedLayout>
          <motion.ul className="list-motion" layout initial={{ borderRadius: 25 }}>
              <DesConsultant />
              <BespokeWeb />
          </motion.ul>
        </AnimateSharedLayout>
        </div>
    </div>
  )
};

function DesConsultant() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (

    <motion.li className="list-item-motion" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="serve-card" layout>
        <FontAwesomeIcon className="icon-color large-icon" icon={faSwatchbook} />
        <h4>Design consultancy</h4>
        <FontAwesomeIcon className="icon-color small-icon" icon={faChevronDown} />
      </motion.div>
      <AnimatePresence>{isOpen && <DesConsultantContent />}</AnimatePresence>
    </motion.li>
  );
}

function BespokeWeb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="list-item-motion" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="serve-card" layout>
        <FontAwesomeIcon className="icon-color large-icon" icon={faCode} />
        <h4>Bespoke websites</h4>
        <FontAwesomeIcon className="icon-color small-icon" icon={faChevronDown} />
      </motion.div>
      <AnimatePresence>{isOpen && <BespokeWebContent />}</AnimatePresence>
    </motion.li>
  );
}

function BespokeWebContent() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="content-style"><p>I'll collaborate with you and your team to create and perfect static mock-ups which I will use to build your new website ensuring that it fulfills your requirements.</p></div>
    </motion.div>
  );
}

function DesConsultantContent() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="content-style"><p>I will draw upon my knowledge of UI, UX design to create modern, intuitive and effective designs using Figma. I will provide a range of static mock-ups and prototypes to choose from.</p></div>
    </motion.div>
  );
}


export default ServiceSection;