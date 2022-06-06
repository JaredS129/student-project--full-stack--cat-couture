import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  position: relative;
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
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
        <h3>{name}</h3>
        <p>Price {price}</p>
        <p data-testid="product-description">{description}</p>
        <StyledButton>Add to Cart</StyledButton>
      </div>
    </StyledProduct>
  );
};

export default Product;
