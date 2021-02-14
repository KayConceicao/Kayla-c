import React from "react";
import { useState } from "react";

// Animation
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// styles
import { ListMotion, ListItemMotion, Card, ContentStyle } from "../styles/DropDownStyle";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSwatchbook, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function TemplateDev() {
  return (
    <AnimateSharedLayout>
      <ListMotion layout initial={{ borderRadius: 25 }}>
          <Item/>
      </ListMotion>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <ListItemMotion layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <Card layout>
        <FontAwesomeIcon className="iconColor largeIcon" icon={faSwatchbook} />
        <h4>Templated websites</h4>
        <FontAwesomeIcon className="iconColor smallIcon" icon={faChevronDown} />
      </Card>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </ListItemMotion>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContentStyle><p>Website design and building at a lower cost. I can provide this at a lower cost because I will be using a set of templates that I have previously created. Worry not, I will add brand touches to make it personal to you and your company.</p></ContentStyle>
    </motion.div>
  );
}