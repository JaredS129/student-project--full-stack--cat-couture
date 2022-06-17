import styled from "styled-components";

const StyledTable = styled.div`
  width: auto;
  overflow: auto;
  & > table {
    color: #fefcfe;
    background: #36125e;
    border: 1px solid #f81f56;
    border-collapse: collapse;
    width: 100%;
  }
`;
const Table = ({ children, className }) => {
  return (
    <StyledTable className={className}>
      <table>{children}</table>
    </StyledTable>
  );
};

export default Table;
