import { useEffect, useReducer, createContext } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";

//Components
import Header from "./components/Header";
import { CrimeContext } from "./CrimeContext";
import { crimeReducer, initialCrimeState } from "./reducers/crimeReducer";
import {
  getStorageValue,
  pushSessionStorage,
} from "./components/sessionStorage";
//Styling
import "./App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const location = useLocation();

  const [crimeState, crimeDispatch] = useReducer(
    crimeReducer,
    initialCrimeState
  );
  const { crimeDataHistory } = crimeState;

  // Session Storage
  // Fetch Session Storage
  const storageKey = "searchHistory";

  useEffect(() => {
    if (getStorageValue(storageKey)) {
      crimeDispatch({
        type: "SESSION_STORAGE_HISTORY",
        payload: getStorageValue(storageKey),
      });
    }
  }, []);

  //Set Session Storage
  useEffect(() => {
    pushSessionStorage(storageKey, crimeDataHistory);
  }, [crimeDataHistory]);

  return (
    <StyledApp>
      <Header />
      <CrimeContext.Provider
        value={{ crimeState: crimeState, crimeDispatch: crimeDispatch }}
      >
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/about/:id" element={<Help />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </CrimeContext.Provider>
      <GlobalStyles />
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)``;

export default App;
