import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context";
const CartScreen = () => {
  const { cart,  total, amount } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <div>
          <h2>Your Cart</h2>
          <h4>is currently empty</h4>
        </div>
      </main>
    );
  }
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Total items: {total}</p>
          <p>Total Amount: ${amount}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
