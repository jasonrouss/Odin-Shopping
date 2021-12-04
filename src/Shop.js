import React from "react";
import Product from "./components/Product";

function Shop(props) {
  const { products, onAdd } = props;
  return (
    <div>
      <div className="container">
        {products.map((product) => (
          <Product key={product.id} onAdd={onAdd} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
