import { useContext } from "react";
import { CrimeContext } from "../CrimeContext";

const useOriActions = () => {
  const { crimeDispatch } = useContext(CrimeContext);

  const oriSearchSubmit = () => {
    crimeDispatch({ type: "ORI_SEARCH_SUBMIT" });
  };

  const oriSearchSuccess = (payload) => {
    crimeDispatch({
      type: "ORI_SEARCH_SUCCESS",
      payload: payload,
    });
  };

  const oriUpdateInput = (payload) => {
    crimeDispatch({
      type: "UPDATE_ORI_SEARCH",
      payload: payload,
    });
  };

  const oriUpdateFromList = (payload) => {
    crimeDispatch({
      type: "UPDATE_ORI_FROM_LIST",
      payload: payload,
    });
  };

  return {
    oriSearchSubmit,
    oriSearchSuccess,
    oriUpdateInput,
    oriUpdateFromList,
  };
};

export default useOriActions;
