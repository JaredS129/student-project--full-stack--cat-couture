import styled from "styled-components";

const StyledTableHeaderCell = styled.th`
  padding: 0.5em;
  border: none;
  color: #000000;
  background: #f81f56;
`;
const TableHeaderCell = ({ children, className }) => {
  return (
    <StyledTableHeaderCell className={className}>
      {children}
    </StyledTableHeaderCell>
  );
};

export default TableHeaderCell;
