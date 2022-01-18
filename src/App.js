import { useEffect } from "react";
import { useReducer } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";

//Components
import Header from "./components/Header";
import { CrimeContext, crimeReducer, initialCrimeState } from "./CrimeContext";
import {
  getStorageValue,
  pushSessionStorage,
} from "./components/sessionStorage";
//Styling
import "./App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyles from "./components/GlobalStyles";

// export const CounterContext = createContext();

// // const initialState = 0;
// // const countReducer = (state, { type, payload }) => {
// //   switch (type) {
// //     case "INCREMENT":
// //       return state + payload;
// //     case "DECREMENT":
// //       return state - payload;
// //     case "RESET":
// //       return initialState;
// //     default:
// //       throw new Error(`Unknown action type: ${type}`);
// //   }
// // };

// const difReducer = (state, action) => {
//   let array;
//   switch (action.type) {
//     case "ADD":
//       array = [...state];
//       array.push(action.payload);
//       return array;
//     case "REMOVE":
//       array = [...state];
//       array.pop();
//       return array;
//     case "CLEAR":
//       return (state = []);
//     default:
//       break;
//   }
// };

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
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </CrimeContext.Provider>
      <GlobalStyles />
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)``;

export default App;
