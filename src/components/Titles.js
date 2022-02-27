import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Titles = ({ handleSort }) => {
  return (
    <StyledTitles>
      <StyledColumn width="40%" onClick={() => handleSort("TITLE")}>
        Title
      </StyledColumn>
      <StyledColumn width="20%" onClick={() => handleSort("AUTHOR")}>
        Author
      </StyledColumn>
      <StyledColumn width="20%" onClick={() => handleSort("COMMENTS")}>
        Comments
      </StyledColumn>
      <StyledColumn width="10%" onClick={() => handleSort("POINTS")}>
        Points
      </StyledColumn>
      <StyledColumn width="10%">Actions</StyledColumn>
    </StyledTitles>
  );
};

const StyledTitles = styled(motion.li)`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
`;
const StyledColumn = styled.span`
  border-bottom: 2px solid #53d126;
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  a {
    color: inherit;
  }

  width: ${(props) => props.width};
`;
export default Titles;
