import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

const StyledNav = styled.nav`
  width: 100%;
  background-color: #1e0f2f;
  display: flex;
  justify-content: space-between;

  .nav-button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .menu {
    display: flex;
    height: 7rem;
  }

  .logo {
    margin: 1.2rem;
  }

  .right-links {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    align-items: center;
    justify-items: center;

    li {
      list-style-type: none;
    }
  }
  .logo-text {
    display: none;
  }
  @media only screen and (min-width: 70rem) {
    .logo-text {
      display: flex;
      font-size: 2.5rem;
      margin: 2rem 0rem;
      padding: 0;
    }
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 32rem) {
    .right-links {
      grid-template-columns: 1fr;
      justify-items: left;
    }
  }
`;

const StyledLink = styled(NavLink)`
  &.nav-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-decoration: none;
  }
  color: #fefcfe;

  &.active {
    color: #f81f56;
  }
  &.visited {
    color: #fefcfe;
  }
  &:hover {
    color: #f81f56;
    transition: 100ms;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 7rem;

  .logo-text {
    font-size: 2.5rem;
    margin: 2rem 0rem;
    padding: 0;
  }
  @media only screen and (min-width: 70rem) {
    display: none;
  }
  @media only screen and (max-width: 25rem) {
    .logo-text {
      font-size: 1.8rem;
    }
  }
`;

const Header = () => {
  return (
    <>
      <header>
        <StyledNav className="page-padding">
          <div className="menu">
            <img className="logo" src="./img/CCLogo.jpg" alt="menu" />
          </div>
          <h1 className="logo-text">Cat Couture</h1>
          <ul className="right-links">
            <li>
              <StyledLink to="/" className="nav-item">
                Products
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/dashboard" className="nav-item">
                Dashboard
              </StyledLink>
            </li>
            <li className="nav-button">
              <LoginButton />
            </li>
          </ul>
        </StyledNav>
      </header>
      <StyledHeader className="main-layout">
        <h1 className="logo-text">Cat Couture</h1>
      </StyledHeader>
    </>
  );
};

export default Header;
