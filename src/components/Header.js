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
      <h1>FBI Crime Data Explorer</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.div)`
  min-height: 20vh;
  h1 {
    text-align: center;
  }
  padding: 2rem;
  .logo {
    position: fixed;
    top: 2rem;
    left: 2rem;
    img {
      height: 50px;
    }
  }
`;

export default Header;
