import styled from "styled-components";
import { motion } from "framer-motion";

export const ListMotion = styled(motion.ul)`
  list-style: none;
  background-color: #c2c5db;
  border-bottom: 3px solid #6A5ACD;
  margin: 1rem;
  border-radius: 25px;
  width: 100%;
`;

export const ListItemMotion = styled(motion.li)`
  list-style: none;
  margin: 0;
  border-radius: 10px;
  color: #282828;
  overflow: hidden;
  padding: 1rem;
  cursor: pointer;
  li:last-child {
    margin-bottom: 0px;
  }
  h4 {
    padding: 0 1rem;
    font-size: 1.5rem;
  }
`;

export const Card = styled(motion.div)`
  margin: 1rem 0;
  color: #282828;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  }

  .iconColor {
    color: #6A5ACD;
  }

  .largeIcon {
    font-size: 2rem;
  }

  .smallIcon {
    font-size: 1rem;
  }
`;

export const ContentStyle = styled.div `
  padding: 0 2rem;
`