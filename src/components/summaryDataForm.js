import React, { useContext, useEffect } from "react";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

//Context
import { CrimeContext } from "../CrimeContext";

//Actions
import useCrimeSearchActions from "../actions/crimeSearchActions";

//API
import axios from "axios";
import { crimeLookupUrl } from "../api";

const SelectionMenu = () => {
  const {
    crimeSearchUpdateInput,
    crimeSearchLoadData,
    crimeSearchSuccess,
    crimeSearchError,
    crimeSearchClear,
  } = useCrimeSearchActions();

  useEffect(() => {
    console.log("form rendered");
  }, []);

  //State
  const { crimeState } = useContext(CrimeContext);
  const { isLoading, crimeDataHistory, inputs } = crimeState;
  const { ori, offense, fromDate, toDate } = inputs;

  const updateInput = (e) => {
    let payload = { key: e.target.name, value: e.target.value };
    crimeSearchUpdateInput(payload);
  };

  const sameInput = (obj1, obj2) => {
    if (
      obj1.ori !== obj2.ori ||
      obj1.offense !== obj2.offense ||
      obj1.toDate !== obj2.toDate ||
      obj1.fromDate !== obj2.fromDate
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const obj1 = crimeDataHistory[crimeDataHistory.length - 1] || {};
    const obj2 = inputs;
    if (sameInput(obj1, obj2)) {
      crimeSearchLoadData();

      axios
        .get(crimeLookupUrl(ori, offense, fromDate, toDate))
        .then((data) => {
          let res = data.data.results;
          crimeSearchSuccess(res);
        })
        .catch((e) => crimeSearchError());
    } else return;
  };

  const clearData = (e) => {
    e.preventDefault();
    crimeSearchClear();
  };

  return (
    <StyledSelectionMenu>
      <h2>Selection Menu</h2>
      <div className="form-container">
        <form className="menu" onSubmit={onSubmit}>
          <div>
            <label htmlFor="ORI">ORI</label>
            <input
              type="text"
              // placeholder={ori}
              name="ori"
              value={ori}
              onChange={(e) => updateInput(e)}
              required
            />
          </div>
          <div>
            <label htmlFor="offense">Offense</label>
            {/* <input
              type="text"
              placeholder={offense}
              name="offense"
              onChange={updateInput}
              required
            /> */}
            <select
              name="offense"
              placeholder={offense}
              value={offense}
              onChange={updateInput}
              required
            >
              <option value="arson">ARSON</option>
              <option value="burglary">BURGLARY</option>
              <option value="homicide">HOMICIDE</option>
              <option value="larceny">LARCENY</option>
              <option value="motor-vehicle-theft">GRAND THEFT AUTO</option>
              <option value="property-crime">PROPERTY CRIME</option>
              <option value="robbery">ROBBERY</option>
              <option value="violent-crime">VIOLENT CRIME</option>
            </select>
          </div>
          <div>
            <label htmlFor="from date">from</label>
            <input
              type="number"
              min="1990"
              max="2020"
              step="1"
              // placeholder={fromDate}
              name="fromDate"
              value={fromDate}
              onChange={updateInput}
              required
            />
          </div>
          <div>
            <label htmlFor="to date">to</label>
            <input
              type="number"
              min="1990"
              max="2020"
              step="1"
              // placeholder={toDate}
              value={toDate}
              name="toDate"
              onChange={updateInput}
              required
            />
          </div>
          <button id="search-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Search"}
          </button>
          <button onClick={clearData} type="submit">
            Clear
          </button>
        </form>
      </div>
    </StyledSelectionMenu>
  );
};

const StyledSelectionMenu = styled(motion.div)`
  padding: 2rem;
  margin: 2rem;

  /* height: 550px; */

  h2 {
    text-align: center;
    margin: 2.5rem 0;
  }
  button,
  input {
    text-transform: uppercase;
  }
  input {
    border: none;

    background: none;
    cursor: text;
    margin-left: 2rem;
    width: 150px;
  }

  //Remove Arrows on Input
  /* Chrome, Safari, Edge, Opera */
  /* input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */

  /* Firefox */
  /* input[type="number"] {
    -moz-appearance: textfield;
  } */

  button {
    background: none;
    cursor: pointer;
    margin-top: 2rem;
    padding: 0.5rem 2rem;
    transition: 0.25s;

    &:hover {
      background: #53d126;
      color: #000000;
    }
  }

  option {
    background: black;

    border: none;
  }
  select {
    background: none;
    border: none;

    width: 150px;
  }

  .menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    button {
      align-self: center;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: space-between;
      margin: 0.25rem 0;
    }
  }
`;

export default SelectionMenu;
