import React from "react";
import Modal from "react-modal";
import "../styles/Main.css";

Modal.setAppElement("#root");

function Cart(props) {
  //Logic for displaying the cart items
  const { cartItems, onAdd, onRemove, countCartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  //Modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  //Modal styles
  const customStyles = {
    content: {
      backgroundColor: "#3a3a3a",
      bottom: "auto",
      border: "2px solid #222831",
      color: "#ffd369",

      fontFamily: "Roboto, sans-serif",
      fontSize: "1.65rem",
      left: "50%",
      marginRight: "-50%",
      right: "auto",
      textAlign: "center",
      top: "70%",
      transform: "translate(-50%, -50%)",
      width: "275px",
    },
    overlay: {
      backgroundColor: "none",
      position: "absolute",
    },
  };

  return (
    <div>
      <div className="fE">
        <button onClick={openModal} className="cart">
          <i class="bi bi-cart3"></i>
          {countCartItems ? (
            <button className="badge">({countCartItems})</button>
          ) : (
            ""
          )}
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Cart Modal"
        style={customStyles}
      >
        <div className="cartTitle">Cart Items</div>
        <div className="cartContent">
          <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div>{item.name}</div>
              <div>
                <div>
                  {item.quantity} x {item.price}$
                </div>
                <button className="add" onClick={() => onAdd(item)}>
                  +
                </button>
                <button className="remove" onClick={() => onRemove(item)}>
                  -
                </button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="prices">
                <div className="row">
                  <div>Items Price</div>
                  <div>{itemsPrice.toFixed(2)}$</div>
                </div>
                <div className="row">
                  <div>Tax Price</div>
                  <div>{taxPrice.toFixed(2)}$</div>
                </div>
                <div className="row">
                  <div>Shipping Price</div>
                  <div>{shippingPrice.toFixed(2)}$</div>
                </div>
                <div className="row">
                  <div>
                    <strong>Total Price:</strong>
                  </div>
                  <div>{totalPrice.toFixed(2)}$</div>
                </div>
              </div>
              <hr />
              <div className="row jC">
                <button
                  className="checkout"
                  onClick={() => {
                    alert("Thank you for shopping on our store");
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
        <button className="closeBtn" onClick={closeModal}>
          Close
        </button>
        <h2
          style={customStyles}
          ref={(_subtitle) => (subtitle = _subtitle)}
        ></h2>
      </Modal>
    </div>
  );
}

export default Cart;
