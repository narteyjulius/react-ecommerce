import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orders = [
    {
      id: 'ORD001',
      date: '2025-04-20',
      total: 119.98,
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 59.99 },
        { name: 'Gaming Mouse', quantity: 1, price: 39.99 },
      ],
    },
    {
      id: 'ORD002',
      date: '2025-04-15',
      total: 129.99,
      items: [{ name: 'Smart Watch', quantity: 1, price: 129.99 }],
    },
  ];

  return (
    <div className="orders-page container">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found. <Link to="/products">Start shopping now!</Link></p>
      ) : (
        <div className="row">
          <div className="col-12">
            {orders.map((order) => (
              <div key={order.id} className="card mb-3 order-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>Order #{order.id}</h5>
                      <p><strong>Date:</strong> {order.date}</p>
                    </div>
                    <div>
                      <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  <h6>Items:</h6>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} (Qty: {item.quantity}) - ${item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;