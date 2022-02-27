import { Link } from "react-router-dom";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import skull from "../media/skull.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <Link to="/">
          <img src={skull} alt="" />
        </Link>
      </div>
      <Link to="/">
        <h1>FBI Crime Data Explorer</h1>
      </Link>
      <StyledNav>
        <ul>
          <li>
            <Link to="/help"> Help</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          {/* <li>
            <Link to="crimecomparison">Crime Comparison</Link>
          </li> */}
          <li>
            <Link to="hackerstories">Hacker Stories</Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.div)`
  min-height: 20vh;
  /* display: flex; */
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  h1 {
    color: #53d126;
  }
  .logo {
    position: fixed;
    top: 2rem;
    left: 2rem;
    img {
      height: 50px;
    }
  }
`;

const StyledNav = styled(motion.div)`
  margin-left: 1rem;
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    color: #53d126;
    text-transform: uppercase;
    margin: 2rem;
  }
  a {
    border: 3px solid #53d126;
    padding: 0.5rem 2rem;
    color: #53d126;
    transition: 0.25s;
    &:hover {
      background: #53d126;
      color: #000000;
    }
  }
  button {
    margin: 1rem;
    transition: 0.25s;
    &:hover {
      background: #53d126;
      color: #000000;
    }
  }
`;

export default Header;
