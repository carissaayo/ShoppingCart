import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductScreen.css";
import { useGlobalContext } from "../context";

const ProductScreen = ({ history }) => {
  const { id } = useParams();
  const { addToCart, fetchSingleProduct, product, loading, qty, setQty } =
    useGlobalContext();
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  const { name, description, price, imageUrl, countInStock } = product;
  return (
    <div className="productscreen">
      {loading ? (
        <div className="loading">
          <h1>Loading ...</h1>
        </div>
      ) : (
        <>
          <div className="productscreen__image">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="productscreen__info">
            <p className="productscreen__name">{name}</p>
            <p>Price:${price}</p>
            <p>Description: {description}</p>
          </div>

          <div className="qantity-con">
            <p>
              Price: <span>${price}</span>
            </p>
            <p>
              Status: <span>In Stock</span>
            </p>
            <p>
              Qty
              <select
                value={qty}
                onChange={(e) => {
                  setQty(Number(e.target.value));
                }}
              >
                {countInStock &&
                  [...Array(product.countInStock).keys()].map((x, index) => {
                    return (
                      <option value={x + 1} key={index}>
                        {x + 1}
                      </option>
                    );
                  })}
              </select>
            </p>
            <p>
              <button
                type="button"
                onClick={() => {
                  addToCart(id, qty);
                  history.push("/cart");
                }}
              >
                Add To Cart
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
