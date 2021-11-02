import "./SideBar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SideBar = () => {
const { setSideBar, sideBar,total } = useGlobalContext();

    return (
      <>
        <div
          className={sideBar ? "overlay display-overlay" : "overlay"}
        onClick={()=>setSideBar(false)}></div>
        <div className={sideBar ? "sidebar show" : "sidebar"}>
          <div className="sidebar__close-btn" onClick={()=>setSideBar(false)}>
            <img src="/images/icon-close.svg" alt="close" />
          </div>
          <ul className="sidebar__links">
            <li>
              <Link to="/cart">
                <img src="/images/icon-cart.svg" alt="cart" />
                <span>
                  cart
                  <span className="sidebar__cartbadge">{total}</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/"> shop</Link>
            </li>
          </ul>
        </div>
      </>
    );
}

export default SideBar
