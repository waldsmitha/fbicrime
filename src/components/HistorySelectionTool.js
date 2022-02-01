import React from "react";
import { useContext } from "react";

//Context
import { CrimeContext } from "../CrimeContext";

//Components
import Toggle from "./Toggle";

//Styling
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

const HistorySelectionTool = () => {
  const { crimeState, crimeDispatch } = useContext(CrimeContext);
  const { crimeDataHistory } = crimeState;
  const chronologicalHistory = [...crimeDataHistory].reverse();

  const updateCrimeData = (item) => {
    crimeDispatch({ type: "SELECT_HISTORY", payload: item.payload });
  };

  return (
    <StyledHistorySelectionTool>
      <AnimateSharedLayout>
        <Toggle title="Search History" state={false}>
          <motion.div className="search-container" layout>
            {chronologicalHistory ? (
              <>
                {chronologicalHistory.map((item, i) => (
                  <ul key={`history${i}`} onClick={() => updateCrimeData(item)}>
                    <li>{item.ori}</li>
                    <li>{item.offense}</li>
                    <li>{item.fromDate}</li>
                    <li>{item.toDate}</li>
                  </ul>
                ))}
              </>
            ) : (
              <p>No Search History</p>
            )}
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledHistorySelectionTool>
  );
};

const StyledHistorySelectionTool = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  background: #53d126;
  color: black;
  min-width: 300px;
  margin: 0;
  z-index: 10;

  .search-container {
    max-height: 400px;
    overflow-y: scroll;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
  }
  scrollbar-color: white black;

  ul {
    padding: 2rem;
    margin: 2rem;
    border: 2px dashed black;
    cursor: pointer;
  }

  h4 {
    cursor: pointer;
    background: black;
    color: #53d126;
    padding: 0.5rem;
    border: 2px solid #53d126;
    font-weight: 300;
  }
`;

export default HistorySelectionTool;
