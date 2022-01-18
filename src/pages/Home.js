import { useContext } from "react";

import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import PlaceholderCard from "../components/PlaceholderCard";
import SelectionMenu from "../components/SelectionMenu";
import HistorySelectionTool from "../components/HistorySelectionTool";
//Context
import { CrimeContext } from "../CrimeContext";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const { crimeState } = useContext(CrimeContext);
  const { crimeData, isLoading, loadStatusText } = crimeState;

  return (
    <StyledHome>
      <HistorySelectionTool />
      <div className="search">
        <SelectionMenu />
        <div className="nav-buttons">
          <Link to="/help">
            <button>Help</button>
          </Link>
          <Link to="About">
            <button>About</button>
          </Link>
        </div>
      </div>

      {loadStatusText && <h2>{loadStatusText}</h2>}
      <div className="grid-container">
        {isLoading && crimeData.map((data, i) => <PlaceholderCard key={i} />)}
        {!isLoading &&
          crimeData.map((data, i) => <Card data={data} key={data.data_year} />)}
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  h2 {
    text-align: center;
  }
  button {
    border: 3px solid #53d126;
    background: none;
    cursor: pointer;
    color: #53d126;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
  }
  .search {
    max-width: 800px;
    width: 100%;
  }

  .nav-buttons {
    margin-left: 1rem;
    margin-bottom: 2rem;
    button {
      margin: 1rem;
      transition: 0.25s;
      &:hover {
        background: #53d126;
        color: #000000;
      }
    }
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 120rem;
  }
`;

export default Home;
