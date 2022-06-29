import { useContext } from "react";
import { CartContext } from "../../providers/cart";
const TotalCart = () => {
  const { cart } = useContext(CartContext);
  console.log("state_cartTotal", cart);

  return (
    <div>
      <h2>Resumo do pedido</h2>
      <div>
        <p>Quantidade: {cart.length}</p>
        <span>
          Valor total:{" "}
          {cart
            .reduce((acc, current) => acc + current.price, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
        </span>
      </div>
    </div>
  );
};
export default TotalCart;
