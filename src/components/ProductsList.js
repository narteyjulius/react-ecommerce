import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { id: 3, name: 'Gaming Mouse', price: 39.99, image: 'https://images.unsplash.com/photo-1585255318859-f13370e90688?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { id: 4, name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1605649487212-47bdab664137?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { id: 5, name: 'Laptop Backpack', price: 49.99, image: 'https://images.unsplash.com/photo-1622560480654-dde250b723c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { id: 6, name: 'USB-C Hub', price: 29.99, image: 'https://images.unsplash.com/photo-1610986603166-f0520773a581?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
  ];

  return (
    <div className="product-list">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
