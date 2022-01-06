import React from "react";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const PlaceholderCard = ({ data }) => {
  return (
    <StyledCard>
      <p>Year: Loading...</p>
      <p>Offense: Loading...</p>
      <p>State: Loading...</p>
      <p>Number: Loading...</p>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  margin: 2rem;
  padding: 2rem;
  border: dashed 2px #53d126;
`;

export default PlaceholderCard;
