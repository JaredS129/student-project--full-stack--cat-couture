import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 2px solid #f81f56;
  color: #fefcfe;
  font-size: 1.05rem;
  font-family: "Poppins";
  padding: 0.5rem 1rem;
  white-space: nowrap;
  &:hover {
    background-color: #f81f56;
    transition: 100ms;
    cursor: pointer;
  }
`;

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <StyledButton>
        <Loader />
      </StyledButton>
    );
  }

  if (isAuthenticated) {
    return (
      <StyledButton
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={() => loginWithRedirect()}>Log In</StyledButton>
  );
};

export default LoginButton;
