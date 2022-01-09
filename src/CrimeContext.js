import { useState, createContext } from "react";

export const CrimeContext = createContext();
export const CrimeContext2 = createContext();

export const CrimeProvider = (props) => {
  const [oriValue, setOri] = useState("MA0092700");
  const [offenseValue, setOffense] = useState("burglary");
  const [fromDateValue, setFromDate] = useState(1995);
  const [toDateValue, setToDate] = useState(2020);

  const states = [
    { ori: [oriValue, setOri] },
    { offense: [offenseValue, setOffense] },
    { fromDate: [fromDateValue, setFromDate] },
    { toDate: [toDateValue, setToDate] },
  ];

  return (
    <CrimeContext.Provider value={states}>
      {props.children}
    </CrimeContext.Provider>
  );
};
