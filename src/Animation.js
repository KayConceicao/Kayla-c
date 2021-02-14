export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: {
    scale: 0
  },
  show: {
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },

}