import { Link } from "react-router-dom";
import "./CartItem.css";
import { useGlobalContext } from "../context";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, _id: id, itemQty } = item;
  const { removeProduct } = useGlobalContext();
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={imageUrl} alt={name} />
      </div>
      <Link to={`/product/${id}`} className="cartitem__name">
        <p>{name}</p>
      </Link>
      <p className="cartitem__price">${price}</p>
      
      <p className='cartitem__qty'>{itemQty} piece(s)</p>
      <button
        className="cartitem__delete-btn"
        onClick={() => removeProduct(id)}
      >
        <img src="/images/icon-delete.svg" alt="" />
      </button>
    </div>
  );
};

export default CartItem;
