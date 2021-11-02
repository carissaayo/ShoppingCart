import "./HomeScreen.css";
import Product from "../components/Product";
import { useGlobalContext } from "../context";
const HomeScreen = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {products.map((product, id) => (
          <Product key={id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default HomeScreen;
