import styled from "styled-components";

const StyledTableCell = styled.td`
  padding: 0.5em;
  border: 1px solid #f81f56;
`;
const TableCell = ({ children, className }) => {
  return <StyledTableCell className={className}>{children}</StyledTableCell>;
};

export default TableCell;
