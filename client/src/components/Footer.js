import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  align-self: flex-end;
  background-color: #36125e;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  height: 6rem;

  .links-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }

  .copyright {
    align-self: center;
    margin-left: -8.2rem;
  }

  .footer-item {
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: 2rem;
    padding-right: 0.5rem;
    text-decoration: none;
    color: #fefcfe;

    &.visited {
      color: black;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className={"page-padding section-padding"}>
      <div className="links-container">
        <Link to="/" className="footer-item">
          Terms of use
        </Link>
        <Link to="/" className="footer-item">
          Privacy policy
        </Link>
      </div>
      <p className="footer-item copyright">Copyright Placeholder</p>
    </StyledFooter>
  );
};

export default Footer;
