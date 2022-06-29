import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Product = ({ product, isRemovable = false }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { id, name, price, img } = product;
  return (
    <li>
      <div>
        <img alt="produto" src={img} />
      </div>
      <div>
        <p>{name}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
        </span>

        {isRemovable ? (
          <button onClick={() => removeFromCart(id)}>Remover</button>
        ) : (
          <button onClick={() => addToCart(product)}>
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </li>
  );
};

export default Product;
