import React from "react";
import { useState } from "react";

// Animation
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// styles
import { ListMotion, ListItemMotion, Card, ContentStyle } from "../styles/DropDownStyle";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faCode } from "@fortawesome/free-solid-svg-icons";

export default function BespokeDev() {
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
        <FontAwesomeIcon className="iconColor largeIcon" icon={faCode} />
        <h4>Bespoke websites</h4>
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
      <ContentStyle><p>I'll collaborate with you and your team to create and perfect static mock-ups which I will use to build your new website ensuring that it is unique and fulfills your requirements.</p></ContentStyle>
    </motion.div>
  );
}
