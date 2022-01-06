import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import PlaceholderCard from "../components/PlaceholderCard";
import SelectionMenu from "../components/SelectionMenu";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const [crimeData, setCrimeData] = useState([]);
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const base_url = "https://api.usa.gov/crime/fbi/sapi";
  const [ori, setOri] = useState("MA0092700");
  const [offense, setOffense] = useState("burglary");
  const [fromDate, setFromDate] = useState(1995);
  const [toDate, setToDate] = useState(2020);
  const [isLoading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  const url_extension = `/api/summarized/agencies/${ori}/${offense}/${fromDate}/${toDate}?API_KEY=${api_key}`;
  const full_url = `${base_url}${url_extension}`;
  const [initialLoad, setInitialLoad] = useState("");

  const oris = [
    { malden: "MA0092700" },
    { gloucester: "MA0050800" },
    { boston: "MA0130100" },
  ];

  const fetchApi = async () => {
    try {
      const data = await axios.get(full_url);
      console.log(data);
      return data.data.results;
    } catch (e) {
      console.log(e);
    }
  };

  //   useEffect(() => {
  //     fetchApi().then((data) => {
  //       setCrimeData(data);
  //       setLoading(false);
  //     });
  //   }, []);

  const fetchData = () => {
    fetchApi().then((data) => {
      setCrimeData(data);
      setLoading(false);
      setInitialLoad("Results");
    });
  };

  return (
    <StyledHome>
      <div className="search">
        <SelectionMenu
          ori={ori}
          setOri={setOri}
          offense={offense}
          setOffense={setOffense}
          toDate={toDate}
          setToDate={setToDate}
          fromDate={fromDate}
          setFromDate={setFromDate}
          setCrimeData={setCrimeData}
          setLoading={setLoading}
          setInitialLoad={setInitialLoad}
          url={full_url}
        />
        <div className="nav-buttons">
          <Link to="/help">
            <button>Help</button>
          </Link>
          <Link to="About">
            <button>About</button>
          </Link>
        </div>
      </div>
      {initialLoad && <h2>{initialLoad}</h2>}
      <div className="grid-container">
        {isLoading && crimeData.map((data, i) => <PlaceholderCard />)}
        {!isLoading && crimeData.map((data, i) => <Card data={data} />)}
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

  & > * {
    margin: 2.5rem 0;
  }
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
  }
`;

export default Home;
