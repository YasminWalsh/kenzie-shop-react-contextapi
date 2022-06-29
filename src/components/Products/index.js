import Product from "../Product";
import { useContext } from "react";
import { Container, Content } from "./style";
import { ProductContext } from "../../providers/product";

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log("state_products", products);
  return (
    <Container>
      <Content>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
};

export default Products;

/* import Product from "../Product";
import { useSelector } from "react-redux/es/exports";
import { Container, Content } from "./style";

const Products = () => {
  const products = useSelector(({ products }) => products);
  console.log("state_products", products);
  return (
    <Container>
      <Content>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
};

export default Products; */
