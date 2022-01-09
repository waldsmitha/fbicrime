import { useEffect, useState } from "react";
import axios from "axios";

import { Route, Routes, useLocation } from "react-router-dom";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";

//Components
import Header from "./components/Header";
import { CrimeProvider } from "./CrimeContext";

//Styling
import "./App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  // const [crimeData, setCrimeData] = useState([]);
  // const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  // const base_url = "https://api.usa.gov/crime/fbi/sapi";
  // const [ori, setOri] = useState("MA0092700");
  // const [offense, setOffense] = useState("burglary");
  // const [fromDate, setFromDate] = useState(1995);
  // const [toDate, setToDate] = useState(2020);
  // const [isLoading, setLoading] = useState(true);
  // const url_extension = `/api/summarized/agencies/${ori}/${offense}/${fromDate}/${toDate}?API_KEY=${api_key}`;
  // const full_url = `${base_url}${url_extension}`;

  // const oris = [
  //   { malden: "MA0092700" },
  //   { gloucester: "MA0050800" },
  //   { boston: "MA0130100" },
  // ];
  // console.log(full_url);

  // const fetchApi = async () => {
  //   try {
  //     const data = await axios.get(full_url);
  //     // console.log(data);
  //     let stringData = JSON.stringify(data, null, 2);
  //     setCrimeData(stringData || "");
  //     console.log(crimeData);
  //     return JSON.stringify(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   const data = fetchApi();
  // }, []);

  // const fetchApi = async () => {
  //   try {
  //     const data = await axios.get(full_url);
  //     console.log(data);
  //     return data.data.results;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchApi().then((data) => {
  //     setCrimeData(data);
  //     setLoading(false);
  //   });
  // }, [ori, offense, fromDate, toDate]);

  const location = useLocation();

  return (
    <StyledApp>
      <Header />
      <CrimeProvider>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </CrimeProvider>
      <GlobalStyles />
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)``;

export default App;
