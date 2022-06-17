import Table from "./Table";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";
import styled from "styled-components";

const StyledReport = styled.div``;

const CategoriesReport = ({ reportData, className }) => {
  return (
    <StyledReport className={className}>
      <h3>Categories Report</h3>
      <Table>
        <thead>
          <tr className="left-align">
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Discounted Products</TableHeaderCell>
            <TableHeaderCell>Total Products</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {reportData.map((category, index) => (
            <tr key={index}>
              <TableCell className="left-align">
                {category.categoryName || "No category"}
              </TableCell>
              <TableCell className="right-align">
                {category.discountedProducts}
              </TableCell>
              <TableCell className="right-align">
                {category.totalProducts}
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </StyledReport>
  );
};

export default CategoriesReport;
