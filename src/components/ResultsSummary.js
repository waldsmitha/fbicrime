import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ResultsSummary = ({ crimeData }) => {
  const arrLength = (arr) => arr.length - 1;
  const sumOffenses = (arr) => {
    const total = arr
      .map((item) => item.actual)
      .reduce((prev, next) => prev + next);
    return total;
  };
  const sortDescending = (data, key) => {
    //key needs to be a string
    const sortedData = [...data].sort((a, b) => b[key] - a[key]);
    // console.log(sortedData);
    return sortedData;
  };
  const firstEntry = crimeData[0];
  const lastEntry = crimeData[arrLength(crimeData)];

  const totalOffenses = sumOffenses(crimeData);
  const offensesPerYear =
    Math.round((totalOffenses / arrLength(crimeData)) * 100) / 100;
  const mostOffenses = sortDescending(crimeData, "actual");

  return (
    <StyledResultsSummary>
      <h3>Results Summary</h3>
      <p>Offense Type: {firstEntry.offense}</p>
      <p>
        Date Range: {firstEntry.data_year} - {lastEntry.data_year}
      </p>
      <p>Total Offenses: {totalOffenses} </p>
      <p>Offenses/Year: {offensesPerYear}</p>
      <p>
        Most Offenses: {mostOffenses[0].actual} in {mostOffenses[0].data_year}
      </p>
    </StyledResultsSummary>
  );
};

const StyledResultsSummary = styled(motion.div)`
  margin: 2rem;
`;
export default ResultsSummary;
