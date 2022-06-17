import Product from "./Product";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin: 3rem;
  padding: 0;
  justify-items: center;
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
