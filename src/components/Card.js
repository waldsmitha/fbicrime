import React from "react";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <StyledCard>
      <p>Year: {data.data_year}</p>
      <p>Offense: {data.offense}</p>
      <p>State: {data.state_abbr}</p>
      <p>Number: {data.actual}</p>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  margin: 2rem;
  padding: 2rem;
  border: dashed 2px #53d126;
`;

export default Card;
