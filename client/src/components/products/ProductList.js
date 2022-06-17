import Product from "./Product";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 0;
  padding: 0;
  justify-items: center;
  @media only screen and (min-width: 70rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 95rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProductList = ({ products, className }) => {
  return (
    <StyledUl className={className}>
      {products.map((product) => (
        <Product
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          discountValue={product.discountValue}
          discountType={product.discountType}
          key={product.id}
        />
      ))}
    </StyledUl>
  );
};

export default ProductList;
