import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { CrimeContext } from "../CrimeContext";

const CrimeComparison = () => {
  const { crimeState } = useContext(CrimeContext);
  const { crimeDataHistory } = crimeState;
  const [filteredCrimeDataHistory, setFilteredCrimeDataHistory] = useState([]);
  const [crimeComparison1, setCrimeComparison1] = useState({});
  const [crimeComparison2, setCrimeComparison2] = useState({});

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      let stringifiedData = crimeDataHistory.map((item) =>
        JSON.stringify(item)
      );
      let set = new Set(stringifiedData);
      let newData = [...set].map((item) => JSON.parse(item));
      console.log(newData, crimeDataHistory);
      setFilteredCrimeDataHistory(newData);
    }

    return () => (isMounted = false);
  }, [crimeDataHistory]);

  const updateCrimeComparison1 = (item) => {
    setCrimeComparison1(item);
    console.log(item);
  };
  const updateCrimeComparison2 = (item) => {
    setCrimeComparison2(item);
    console.log(item);
  };

  return (
    <StyledCrimeComparison>
      {filteredCrimeDataHistory &&
        filteredCrimeDataHistory.map((item, i) => {
          const { ori, offense, fromDate, toDate } = item;
          return (
            <div
              key={`${ori}${i}`}
              onClick={() => updateCrimeComparison1(item)}
            >
              <p>{ori}</p>
              <p>{offense}</p>
              <p>{fromDate}</p>
              <p>{toDate}</p>
            </div>
          );
        })}
      {filteredCrimeDataHistory &&
        filteredCrimeDataHistory.map((item, i) => {
          const { ori, offense, fromDate, toDate } = item;
          return (
            <div
              key={`${ori}${i}`}
              onClick={() => updateCrimeComparison2(item)}
            >
              <p>{ori}</p>
              <p>{offense}</p>
              <p>{fromDate}</p>
              <p>{toDate}</p>
            </div>
          );
        })}
      {crimeComparison1 && <p>{crimeComparison1.offense}</p>}
      {crimeComparison2 && <p>{crimeComparison2.offense}</p>}
    </StyledCrimeComparison>
  );
};

const StyledCrimeComparison = styled(motion.div)``;

export default CrimeComparison;
