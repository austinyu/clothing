import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Shop;
