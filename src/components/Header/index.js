import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Content } from "./style";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Header = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();
  const [toCart, setToCart] = useState(true);

  const handleToCart = () => {
    history.push("/cart");
    setToCart(false);
  };
  const handleToProducts = () => {
    history.push("/");
    setToCart(true);
  };

  return (
    <Container>
      <Content>
        <h2>
          Kenzie <h2>Book</h2> Shop
        </h2>
        {toCart ? (
          ({
            /* <button onClick={handleToCart}> Carrinho </button> */
          },
          (
            <button onClick={handleToCart}>
              <div>
                {cart.length !== 0 && <p>{cart.length}</p>}
                <FiShoppingCart />
              </div>
              Carrinho
            </button>
          ))
        ) : (
          <button onClick={handleToProducts}> Vitrine </button>
        )}
      </Content>
    </Container>
  );
};

export default Header;
