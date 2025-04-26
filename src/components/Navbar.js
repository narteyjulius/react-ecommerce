import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = () => {
    alert('Search functionality to be implemented');
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="logo">eShop</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deals">Deals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-icon">
                🛒
                {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link search-icon" onClick={handleSearch}>🔍</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;