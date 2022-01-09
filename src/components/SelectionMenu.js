import React, { useEffect, useState } from "react";
import axios from "axios";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

//API
import { fetchApi } from "../api";

const SelectionMenu = ({
  ori,
  setOri,
  offense,
  setOffense,
  toDate,
  setToDate,
  fromDate,
  setFromDate,
  setCrimeData,
  isLoading,
  setLoading,
  setInitialLoad,
  url,
}) => {
  // useEffect(() => {
  //   let mounted = true;
  //   fetchApi(url)
  //     .then((data) => {
  //       if (mounted) {
  //         setCrimeData(data);
  //         setLoading(false);
  //         setInitialLoad("Results");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setCrimeData([]);
  //     });
  //   return () => {
  //     mounted = false;
  //   };
  // }, [isLoading]);

  const fetchData = (url) => {
    fetchApi(url).then((data) => {
      setCrimeData(data ? data : []);
      setLoading(false);
      setInitialLoad(data ? "Results" : "Error");
    });
  };

  const formValidation = () => {
    if (fromDate.toString().length == 4) return true;
    if (toDate.toString().length == 4) return true;

    return true;
  };

  console.log(formValidation());

  return (
    <StyledSelectionMenu>
      <h2>Selection Menu</h2>
      <div className="menu">
        <div>
          <label htmlFor="ORI">ORI</label>
          <input
            type="text"
            value={ori}
            onChange={(e) => {
              setOri(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="offense">Offense</label>
          <input
            type="text"
            value={offense}
            onChange={(e) => {
              setOffense(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="from date">from</label>
          <input
            type="text"
            value={fromDate}
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="to date">to</label>
          <input
            type="text"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        id="search-btn"
        onClick={() => {
          if (formValidation()) {
            fetchData(url);
            setLoading(true);
            setInitialLoad("Loading...");
          } else {
            alert("Form has errors.");
          }
        }}
      >
        Search
      </button>
    </StyledSelectionMenu>
  );
};

const StyledSelectionMenu = styled(motion.div)`
  padding: 2rem;
  margin: 2rem;
  border: 2px dashed #53d126;

  h2 {
    text-align: center;
    margin: 2.5rem 0;
    border-bottom: dashed 2px #53d126;
  }
  button,
  input {
    color: #53d126;
    text-transform: uppercase;
  }
  input {
    border: none;
    border-bottom: 3px solid #53d126;
    background: none;
    cursor: text;
    margin-left: 2rem;
    width: 150px;
  }
  button {
    border: 3px solid #53d126;
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

  .menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: space-between;
      margin: 0.25rem 0;
    }
  }
`;

export default SelectionMenu;
