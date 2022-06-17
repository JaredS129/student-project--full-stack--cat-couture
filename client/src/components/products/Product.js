import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  position: relative;
  background-color: #36125e;
  border: ${(props) =>
    props.discount ? "1px solid #ffbf39" : "1px solid #f81f56"};
  list-style: none;
  padding: 1.7rem;
  margin-bottom: 1.7rem;
  width: 100%;
  justify-self: center;
  max-width: 30rem;
  .price {
    font-size: 1.3rem;
    margin: 0;
    margin-bottom: 0.8rem;
  }
  .product-image {
    max-width: 20rem;
  }
  .description {
    margin: 0;
    margin-bottom: 1.3rem;
  }
  .discount-border {
    border: 9px solid #ffbf39;
  }
  .card {
    border: 1px solid #f81f56;
  }
  .card-discount {
    border: 1px solid #ffbf39;
  }
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  text-align: right;
  position: relative;
  width: fit-content;
  top: -4.3rem;
  right: -12.8rem;
  margin-bottom: -3.7rem;
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
  margin: 0;
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
    <StyledProduct discount={discountValue && discountType ? true : false}>
      <div>
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className={
                discountValue && discountType
                  ? "product-image discount-border"
                  : "product-image"
              }
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
        <p data-testid="product-description" className="description">
          {description}
        </p>
        <StyledButton>Add to Cart</StyledButton>
      </div>
    </StyledProduct>
  );
};

export default Product;
