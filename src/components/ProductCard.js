import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="col-md-4 col-sm-6 product-card">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <div className="card">
          <img src={product.image} className="card-img-top product-image" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title product-title">{product.name}</h5>
            <p className="card-text product-price">${product.price.toFixed(2)}</p>
            <button
              className="btn btn-primary add-to-cart"
              onClick={(e) => {
                e.preventDefault(); // Prevent Link navigation
                handleAddToCart();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;