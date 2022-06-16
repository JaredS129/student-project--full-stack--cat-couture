import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  position: relative;
  background-color: #36125e;
  border: 1px solid #ffbf39;
  list-style: none;
  padding: 1.7rem;
  margin-bottom: 1.7rem;
  .price {
    font-size: 1.3rem;
  }
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledButton = styled.button`
  background-color: #f81f56;
  border: none;
  color: #fefcfe;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
`;

const StyledHeading = styled.h3`
  color: #f81f56;
  font-size: 1.6rem;
`;

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <StyledProduct>
      <div className="card">
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {discountValue && discountType && (
            <StyledDiscountBadge
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <StyledHeading>{name}</StyledHeading>
        <p className="price">Price {price}</p>
        <p data-testid="product-description">{description}</p>
        <StyledButton>Add to Cart</StyledButton>
      </div>
    </StyledProduct>
  );
};

export default Product;
