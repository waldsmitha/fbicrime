import { createContext } from "react";

export const CrimeContext = createContext();

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
