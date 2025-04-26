import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PaymentConfirmation = () => {
  const { state } = useLocation();
  const isSuccess = state?.success || false;

  return (
    <div className="payment-confirmation-page container">
      <h2>{isSuccess ? 'Payment Successful' : 'Payment Failed'}</h2>
      <p>
        {isSuccess
          ? 'Thank you for your purchase! Your order has been placed.'
          : 'Sorry, there was an issue processing your payment. Please try again.'}
      </p>
      <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
    </div>
  );
};

export default PaymentConfirmation;