import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import PlaceholderCard from "../components/PlaceholderCard";
import SelectionMenu from "../components/summaryDataForm";
import HistorySelectionTool from "../components/HistorySelectionTool";
import BarChart from "../components/BarChart";
//Context
import { CrimeContext } from "../CrimeContext";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

import { fetchSummaryApi } from "../api";
import ResultsSummary from "../components/ResultsSummary";
import ResultsSummaryChart from "../components/ResultsSummaryChart";
import ORILookup from "../components/ORILookup";
import { useAxios } from "../components/useAxios";

const Home = () => {
  const { crimeState } = useContext(CrimeContext);
  const { crimeData, isLoading, loadStatusText } = crimeState;

  const [summaryData, setSummaryData] = useState([]);
  const [nationalArson, setNationalArson] = useState();
  const [nationalBurglary, setNationalBurglary] = useState([]);
  const [nationalHomicide, setNationalHomicide] = useState([]);
  const [nationalViolentCrime, setNationalViolentCrime] = useState([]);

  const [dateRange, setDateRange] = useState([]);
  const fetchData = async () => {
    const data = await fetchSummaryApi(2000, 2020);
    // console.log(data);
    return data;
  };

  useEffect(() => {
    console.log("Home Rendered");
  }, []);

  useEffect(() => {
    if (summaryData.length > 0) return;
    fetchData().then((res) => {
      const sortedData = sortDescending(res, "year");
      setSummaryData(sortedData);
    });
  }, []);

  const sortDescending = (data, key) => {
    //key needs to be a string
    const sortedData = [...data].sort((a, b) => a[key] - b[key]);
    return sortedData;
  };

  useEffect(() => {
    if (!summaryData.length) {
      return;
    }

    const dateRange = summaryData.map((item) => item.year);
    const arson = summaryData.map((item) => item.arson);
    const burglary = summaryData.map((item) => item.burglary);
    const homicide = summaryData.map((item) => item.homicide);
    const violentCrime = summaryData.map((item) => item.violent_crime);
    setNationalArson(arson);
    setNationalBurglary(burglary);
    setNationalHomicide(homicide);
    setNationalViolentCrime(violentCrime);
    setDateRange(dateRange);
    // console.log(dateRange);
    // setSummaryData(data);
    // console.log(data);
  }, [summaryData]);

  const nationalText = {
    arsonText: {
      title: "national arson count",
    },
    burglaryText: {
      title: "national burglary count",
    },
    homicideText: {
      title: "national homicide count",
    },
    violentCrimeText: {
      title: "national violent crime count",
    },
  };

  const { arsonText, burglaryText, homicideText, violentCrimeText } =
    nationalText;

  return (
    <StyledHome>
      {summaryData && (
        <StyledGridContainer>
          <BarChart
            text={arsonText}
            data={nationalArson}
            dateRange={dateRange}
          />
          <BarChart
            text={burglaryText}
            data={nationalBurglary}
            dateRange={dateRange}
          />
          <BarChart
            text={violentCrimeText}
            data={nationalViolentCrime}
            dateRange={dateRange}
          />
          <BarChart
            text={homicideText}
            data={nationalHomicide}
            dateRange={dateRange}
          />
        </StyledGridContainer>
      )}

      <StyledSearchForms>
        <ORILookup />
        <SelectionMenu />
      </StyledSearchForms>
      {loadStatusText && <h2>{loadStatusText}</h2>}
      {crimeData.length > 0 && (
        <StyledFlexContainer>
          <ResultsSummary crimeData={crimeData} />{" "}
          <ResultsSummaryChart crimeData={crimeData} />
        </StyledFlexContainer>
      )}
      <StyledGridContainer>
        {isLoading && crimeData.map((data, i) => <PlaceholderCard key={i} />)}
        {!isLoading &&
          crimeData.map((data, i) => <Card data={data} key={data.data_year} />)}
      </StyledGridContainer>
      <HistorySelectionTool />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  h2 {
    text-align: center;
  }
  button {
    border: 3px solid #53d126;
    background: none;
    cursor: pointer;
    color: #53d126;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
  }

  .nav-buttons {
    margin-left: 1rem;
    margin-bottom: 2rem;
    button {
      margin: 1rem;
      transition: 0.25s;
      &:hover {
        background: #53d126;
        color: #000000;
      }
    }
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 120rem;
  }
`;

const StyledGridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  width: 100%;
  grid-gap: 2rem;
  padding: 2rem;
`;

const StyledFlexContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  /* margin: 2rem; */
  & > * {
    flex: 1 1 350px;
  }
`;
const StyledSearchForms = styled(StyledFlexContainer)`
  margin: 10rem 0;
`;

export default Home;
