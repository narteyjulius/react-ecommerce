import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>eShop</h5>
            <p>Your one-stop shop for electronics and accessories. Quality products, great prices!</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/deals">Deals</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">© {new Date().getFullYear()} eShop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;