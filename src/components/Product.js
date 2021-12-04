import React from "react";

function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-1 product ">
      <div className="title">{product.name}</div>
      <img src={product.image} alt={product.name} className="proImage" />
      <div className="platform">{product.platform}</div>
      <div className="price">{product.price}$</div>
      <div>
        <button onClick={() => onAdd(product)} className="addToCart">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
