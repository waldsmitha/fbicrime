import React from "react";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Help = () => {
  return (
    <StyledHelp>
      <h2>Help Menu</h2>
      <ul>
        <li>
          ori: Originating Agency Identifier
          <br />
          (e.g. MA0130100 for boston)
        </li>
        <li>to: date (year. min 1995)</li>
        <li>from: date(Year. max 2020)</li>
        <li>offense: [arson, burglary, homicide, robbery]</li>
      </ul>
    </StyledHelp>
  );
};

const StyledHelp = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ul {
    margin-top: 1rem;
    border: 2px dashed #53d126;
    padding: 2rem;
  }
  li {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export default Help;
