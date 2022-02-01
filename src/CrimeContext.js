import { createContext } from "react";

export const CrimeContext = createContext();

export const initialCrimeState = {
  inputs: {
    ori: "MA0092700",
    offense: "arson",
    fromDate: 1995,
    toDate: 2020,
  },
  isLoading: false,
  loadStatusText: "",
  isLoaded: false,
  crimeData: [],
  crimeDataHistory: "",
  error: "",
  payload: "",
  stateOris: {
    stateAbbr: "",
    isLoading: false,
    data: [],
  },
};

//Remove duplicates from crimeDataHistory

export const crimeReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [payload.key]: payload.value,
        },
      };
    case "UPDATE_ORI_SEARCH":
      return {
        ...state,
        stateOris: {
          ...state.stateOris,
          [payload.key]: payload.value,
        },
      };
    case "ORI_SEARCH_SUBMIT":
      return {
        ...state,
        stateOris: {
          ...state.stateOris,
          isLoading: true,
        },
      };
    case "ORI_SEARCH_SUCCESS":
      return {
        ...state,
        stateOris: {
          ...state.stateOris,
          data: payload,
          isLoading: false,
        },
      };
    case "UPDATE_ORI_FROM_LIST":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ori: payload,
        },
      };
    case "LOAD_DATA":
      return {
        ...state,
        crimeData: [],
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
            ori: state.inputs.ori,
            offense: state.inputs.offense,
            fromDate: state.inputs.fromDate,
            toDate: state.inputs.toDate,
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
