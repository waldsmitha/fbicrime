import React, { useState, useEffect, useContext } from "react";
//Context
import { CrimeContext } from "../CrimeContext";
//Actions
import useOriActions from "../actions/oriLookupActions";
//Components
import { oriLookupUrl } from "../api";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import axios from "axios";

const ORILookup = () => {
  //State
  const { crimeState, crimeDispatch } = useContext(CrimeContext);
  const { stateOris } = crimeState;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const {
    oriSearchSubmit,
    oriSearchSuccess,
    oriUpdateInput,
    oriUpdateFromList,
  } = useOriActions();

  const submitForm = (e) => {
    e.preventDefault();

    oriSearchSubmit();

    axios
      .get(oriLookupUrl(stateOris.stateAbbr))
      .then((data) => {
        let res = data.data.results;
        oriSearchSuccess(res);
        setSearchResults(res);
      })
      .catch((e) => console.log(e));
  };

  const updateInput = (e) => {
    const value = e.target.value.toUpperCase();
    const key = e.target.name;
    let payload = { key, value };
    oriUpdateInput(payload);
  };

  const handleFilter = (e) => {
    const result = e.target.value;
    const capitalizedResults = result.charAt(0).toUpperCase() + result.slice(1);
    setSearchTerm(capitalizedResults);
  };

  const updateOriFromList = (data) => {
    oriUpdateFromList(data);
  };

  // //useEffects
  useEffect(() => {
    console.log("Ori rendered");
  }, []);

  useEffect(() => {
    const results = stateOris.data.filter((o) =>
      o.agency_name.includes(searchTerm)
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
            {searchResults.length > 0 &&
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
  /* border: dashed 2px #53d126; */
  border-radius: 2rem;
  background: #3e4144;
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
