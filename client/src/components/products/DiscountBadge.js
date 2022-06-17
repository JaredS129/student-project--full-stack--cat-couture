import styled from "styled-components";

const StyledDiscountDiv = styled.div`
  padding: 1rem 1.2rem;
  background-color: #ffbf39;
  color: #1e0f2f;
  font-weight: 700;
  font-size: 1.3rem;
`;

const DiscountBadge = ({ discountType, discountValue, className }) => {
  return (
    <StyledDiscountDiv className={className} data-testid="badge">
      {discountType === "percentage off" && <>{discountValue} % off</>}
      {discountType === "fixed amount off" && <>$ {discountValue} off</>}
    </StyledDiscountDiv>
  );
};

export default DiscountBadge;
