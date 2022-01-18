import { createContext } from "react";

export const CrimeContext = createContext();

export const initialCrimeState = {
  ori: "MA0092700",
  offense: "arson",
  fromDate: 1995,
  toDate: 2020,
  isLoading: false,
  loadStatusText: "",
  isLoaded: false,
  crimeData: [],
  crimeDataHistory: "",
  error: "",
};

//Remove duplicates from crimeDataHistory

export const crimeReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE":
      return {
        ...state,
        [payload.key]: payload.value,
      };
    case "LOAD_DATA":
      return {
        ...state,
        isLoading: true,
        loadStatusText: "Loading...",
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        loadStatusText: "Results",
        crimeData: payload,
        crimeDataHistory: [
          ...state.crimeDataHistory,
          {
            ori: state.ori,
            offense: state.offense,
            fromDate: state.fromDate,
            toDate: state.toDate,
            payload: [...payload],
          },
        ],
      };
    case "ERROR":
      return {
        ...state,
        loadStatusText: "Error occurred",
        isLoading: false,
        isLoaded: false,
        crimeData: [],
      };
    case "CLEAR":
      return {
        ...state,
        loadStatusText: "Data Cleared",
        crimeData: [],
      };
    case "SELECT_HISTORY":
      return {
        ...state,
        loadStatusText: "Results",
        crimeData: payload,
      };
    case "SESSION_STORAGE_HISTORY":
      return {
        ...state,
        crimeDataHistory: [...payload],
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const CrimeProvider = (props, { crimeState, crimeDispatch }) => {
  //   const [oriValue, setOri] = useState("MA0092700");
  //   const [offenseValue, setOffense] = useState("burglary");
  //   const [fromDateValue, setFromDate] = useState(1995);
  //   const [toDateValue, setToDate] = useState(2020);

  return (
    <CrimeContext.Provider
      value={{ crimeState: crimeState, crimeDispatch: crimeDispatch }}
    >
      {props.children}
    </CrimeContext.Provider>
  );
};
