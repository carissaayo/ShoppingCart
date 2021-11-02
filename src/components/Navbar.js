import {Link} from "react-router-dom";
import "./Navbar.css";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setSideBar,total } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>CARISSA Shopping Cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <img src="/images/icon-cart.svg" alt="" />
            <span>
                cart
                <span className="cartlogo__badge">{total}</span>  
            </span> 
          </Link>
        </li>
        <li>
              <Link to="/"> shop</Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={()=> setSideBar(true)}>
        <img src="/images/icon-menu.svg" alt="menu" />
      </div>
    </nav>
  );
};
export default Navbar;
