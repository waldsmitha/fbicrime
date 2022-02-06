import React, { useState, useEffect, useContext } from "react";
//Context
import { CrimeContext } from "../CrimeContext";
//Components
import { fetchOriApi } from "../api";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Toggle from "./Toggle";

const ORILookup = () => {
  //State
  const { crimeState, crimeDispatch } = useContext(CrimeContext);
  const { stateOris } = crimeState;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Functions
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("state ori search submitted");
    crimeDispatch({ type: "ORI_SEARCH_SUBMIT" });

    await fetchOriApi(stateOris.stateAbbr)
      .then((data) => {
        crimeDispatch({ type: "ORI_SEARCH_SUCCESS", payload: data });
        setSearchResults(data);
      })
      .catch((e) => console.log(e));
  };

  const updateInput = (e) => {
    const input = e.target.value;
    const capitalizedInput = input.toUpperCase();
    crimeDispatch({
      type: "UPDATE_ORI_SEARCH",
      payload: { key: e.target.name, value: capitalizedInput },
    });
  };

  const handleFilter = (e) => {
    const result = e.target.value;
    // const capitalizedResults = result.charAt(0).toUpperCase() + result.slice(1);
    setSearchTerm(result);
  };

  const updateOriFromList = (data) => {
    console.log(data);
    crimeDispatch({
      type: "UPDATE_ORI_FROM_LIST",
      payload: data,
    });
  };

  //useEffects
  // useEffect(() => {
  //   console.log(stateOris);
  //   console.log(searchTerm);
  //   console.log(searchResults);
  // }, [stateOris, searchTerm]);

  useEffect(() => {
    const results = stateOris.data.filter((o) =>
      o.agency_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="flex-container">
      <StyledORILookup>
        <h2>ORI Lookup</h2>
        <form className="menu" onSubmit={submitForm}>
          <div>
            <label htmlFor="oriSearch">Enter State Abbreviation</label>
            <input
              type="text"
              placeholder={"State Abbr"}
              name="stateAbbr"
              onChange={updateInput}
              required
            />
          </div>
          <button type="submit">
            {stateOris.isLoading ? "Loading..." : "Search"}
          </button>
        </form>
      </StyledORILookup>
      <StyledOriResults>
        {stateOris.data.length > 0 && (
          <div className="filter-input">
            <label htmlFor="citySearch">Enter City</label>
            <input
              type="text"
              placeholder={"Enter City"}
              name="city"
              value={searchTerm}
              onChange={handleFilter}
              required
            />
          </div>
        )}

        <Toggle title={""} state={true} className="toggle-ori">
          <div className="ori-search-results">
            {searchResults &&
              searchResults.map((data) => (
                <p key={data.ori} onClick={() => updateOriFromList(data.ori)}>
                  {data.agency_name}: {data.ori}
                </p>
              ))}
          </div>
        </Toggle>
      </StyledOriResults>
    </div>
  );
};

const StyledORILookup = styled(motion.div)`
  margin: 2rem;
  padding: 2rem;
  border: dashed 2px #53d126;
  /* height: 550px; */
  h2 {
    text-align: left;
  }
  input {
    text-transform: uppercase;
    margin: 0.5rem 0 1rem 0rem;
  }
  button {
    transition: 0.25s;
    &:hover {
      background: #53d126;
      color: #000000;
    }
  }
`;

const StyledOriResults = styled(motion.div)`
  margin: 2rem;

  .filter-input {
    margin-bottom: 1rem;
    input {
      /* margin-left: 1rem; */
    }
  }
  .ori-search-results {
    /* padding: 1rem; */
    max-width: 400px;
    max-height: 300px;
    overflow-y: scroll;
    background: #53d126;
    color: black;

    p {
      cursor: pointer;
      border-bottom: 2px dashed black;
      /* margin-bottom: 1rem; */
      padding: 1rem;
      /* margin-bottom: 0.5rem; */
      transition: 0.25s;
      &:hover {
        color: #53d126;
        background: black;
      }
    }
  }
`;

export default ORILookup;
