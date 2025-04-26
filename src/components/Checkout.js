import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';
import { CartContext } from '../contexts/CartContext';
const Checkout = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock payment processing (50% chance of success)
    const isSuccess = Math.random() > 0.5;
    clearCart();
    navigate('/payment-confirmation', { state: { success: isSuccess } });
  };

  return (
    <div className="checkout-page container">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Payment Details</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="expiry" className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Pay ${total.toFixed(2)}</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Order Summary</h4>
          {cart.map((item) => (
            <div key={item.id} className="mb-2">
              <p>{item.name} (Qty: {item.quantity}) - ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <h5>Total: ${total.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Checkout;