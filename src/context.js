import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import { products } from "./products";
import reducer from "./reducer";

const AppContext = createContext();
const initialState = {
  loading: false,
  products: [],
  total: 0,
  amount: 0,
  product: {},
  cart: [],
};

const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [qty, setQty] = useState(1);

  const fetchProducts = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await fetch(
        "https://carissa-shopping-cart.herokuapp.com/api/products"
      );
      const products = await response.json();
      dispatch({ type: "DISPLAY_ITEMS", payload: products });
      localStorage.setItem("cart", JSON.stringify(products));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await fetch(
        `https://carissa-shopping-cart.herokuapp.com/api/products/${id}`
      );
      const product = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT_REQUEST", payload: product });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const addToCart = async (id, qty) => {
    const itemQty = Number(qty);
        const response = await fetch(`https://carissa-shopping-cart.herokuapp.com/api/products/${id}`);
    const cartItem = await response.json();
    dispatch({ type: "ADD_TO_CART", payload: { ...cartItem, itemQty } });
    dispatch({ type: "UPDATE_CART" });
  };
  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    dispatch({ type: "UPDATE_CART" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        sideBar,
        setSideBar,
        addToCart,
        fetchSingleProduct,
        removeProduct,
        qty,
        setQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
