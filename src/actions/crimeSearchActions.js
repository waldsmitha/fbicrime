import { useContext } from "react";
import { CrimeContext } from "../CrimeContext";

const useCrimeSearchActions = () => {
  const { crimeDispatch } = useContext(CrimeContext);

  const crimeSearchUpdateInput = (payload) => {
    crimeDispatch({
      type: "UPDATE",
      payload: payload,
    });
  };

  const crimeSearchLoadData = () => {
    crimeDispatch({ type: "LOAD_DATA" });
  };

  const crimeSearchSuccess = (payload) => {
    crimeDispatch({ type: "SUCCESS", payload: payload });
  };

  const crimeSearchError = () => {
    crimeDispatch({ type: "ERROR" });
  };

  const crimeSearchClear = () => {
    crimeDispatch({ type: "CLEAR" });
  };

  return {
    crimeSearchUpdateInput,
    crimeSearchLoadData,
    crimeSearchSuccess,
    crimeSearchError,
    crimeSearchClear,
  };
};

export default useCrimeSearchActions;
