import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', 
        description: 'High-quality wireless High-quality wireless headphones with noise cancellation.High-quality wireless headphones with noise cancellation.High-quality wireless headphones with noise cancellation.High-quality wireless headphones with noise cancellation.headphones with noise cancellation.High-quality wireless headphones with noise cancellation.High-quality wireless headphones with noise cancellation.' 
    },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Feature-packed smart watch with fitness tracking.' },
    { id: 3, name: 'Gaming Mouse', price: 39.99, image: 'https://images.unsplash.com/photo-1585255318859-f13370e90688?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Precision gaming mouse with customizable buttons.' },
    { id: 4, name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1605649487212-47bdab664137?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Portable Bluetooth speaker with powerful sound.' },
    { id: 5, name: 'Laptop Backpack', price: 49.99, image: 'https://images.unsplash.com/photo-1622560480654-dde250b723c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Durable backpack with laptop compartment.' },
    { id: 6, name: 'USB-C Hub', price: 29.99, image: 'https://images.unsplash.com/photo-1610986603166-f0520773a581?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Multi-port USB-C hub for connectivity.' },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail container mt-5">
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="product-detail container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid product-detail-image" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary mb-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to="/products" className="btn btn-secondary">Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;