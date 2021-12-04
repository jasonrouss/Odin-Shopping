import Cart from "../components/Cart";
import Header from "../components/Header";
import Shop from "../Shop";
import data from "../data";
import { useState } from "react";
function ShopPage() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      // ... spread operator
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart`);
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <Header />
      <Cart
        onAdd={onAdd}
        onRemove={onRemove}
        countCartItems={cartItems.length}
        cartItems={cartItems}
      />
      <Shop onAdd={onAdd} products={products} />
    </div>
  );
}

export default ShopPage;
