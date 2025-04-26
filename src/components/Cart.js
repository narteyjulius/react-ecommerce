import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Start shopping now!</Link></p>
      ) : (
        <div className="row">
          <div className="col-12">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 cart-item">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.name}</h5>
                    <p>Price: ${item.price.toFixed(2)} | Quantity: {item.quantity}</p>
                  </div>
                  <p><strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="text-end">
              <h4>Total: ${total.toFixed(2)}</h4>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;