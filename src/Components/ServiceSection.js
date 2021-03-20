import React from "react";
import { useState } from "react";

// Animation
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSwatchbook, faCode, faRulerCombined } from "@fortawesome/free-solid-svg-icons";

const ServiceSection =() => {
  return (
    <div className="services">
        <div className='introText'>
          <h2>My services</h2>
          <p>I have passion for design and web coding which fuels my determination to learn and develop my skills. I like to use new trends and creative thinking to build websites.</p><p>Select the services to find out more about them.</p>
        </div>
        <div className="serveCards">
        <AnimateSharedLayout>
          <motion.ul className="listMotion" layout initial={{ borderRadius: 25 }}>
              <DesConsultant />
              <BespokeWeb />
              <TemplateWeb />
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

    <motion.li className="listItemMotion" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="serveCard" layout>
        <FontAwesomeIcon className="iconColor largeIcon" icon={faSwatchbook} />
        <h4>Design consultancy</h4>
        <FontAwesomeIcon className="iconColor smallIcon" icon={faChevronDown} />
      </motion.div>
      <AnimatePresence>{isOpen && <DesConsultantContent />}</AnimatePresence>
    </motion.li>
  );
}

function BespokeWeb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="listItemMotion" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="serveCard" layout>
        <FontAwesomeIcon className="iconColor largeIcon" icon={faCode} />
        <h4>Bespoke websites</h4>
        <FontAwesomeIcon className="iconColor smallIcon" icon={faChevronDown} />
      </motion.div>
      <AnimatePresence>{isOpen && <BespokeWebContent />}</AnimatePresence>
    </motion.li>
  );
}

function TemplateWeb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="listItemMotion" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="serveCard" layout>
        <FontAwesomeIcon className="iconColor largeIcon" icon={faRulerCombined} />
        <h4>Templated websites</h4>
        <FontAwesomeIcon className="iconColor smallIcon" icon={faChevronDown} />
      </motion.div>
      <AnimatePresence>{isOpen && <TemplateWebContent />}</AnimatePresence>
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
      <div className="contentStyle"><p>I'll collaborate with you and your team to create and perfect static mock-ups which I will use to build your new website ensuring that it is unique and fulfills your requirements.</p></div>
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
      <div className="contentStyle"><p>I will draw upon my extensive knowledge of UI, UX and design background to create modern, intuitive and effective designs. I can provide a range of static mock-ups to choose from based upon your specific needs.</p></div>
    </motion.div>
  );
}

function TemplateWebContent() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contentStyle"><p>Website design and building at a lower cost. I can provide this at a lower cost because I will be using a set of templates that I have previously created. Worry not, I will add brand touches to make it personal to you and your company.</p></div>
    </motion.div>
  );
}

export default ServiceSection;