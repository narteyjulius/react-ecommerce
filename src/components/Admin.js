import React, { useState } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'High-quality wireless headphones with noise cancellation.' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Feature-packed smart watch with fitness tracking.' },
    { id: 3, name: 'Gaming Mouse', price: 39.99, image: 'https://images.unsplash.com/photo-1585255318859-f13370e90688?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Precision gaming mouse with customizable buttons.' },
    { id: 4, name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1605649487212-47bdab664137?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Portable Bluetooth speaker with powerful sound.' },
    { id: 5, name: 'Laptop Backpack', price: 49.99, image: 'https://images.unsplash.com/photo-1622560480654-dde250b723c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Durable backpack with laptop compartment.' },
    { id: 6, name: 'USB-C Hub', price: 29.99, image: 'https://images.unsplash.com/photo-1610986603166-f0520773a581?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80', description: 'Multi-port USB-C hub for connectivity.' },
  ]);

  const [orders] = useState([
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
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', image: '', description: '' });

  const handleAddProduct = () => {
    setFormData({ name: '', price: '', image: '', description: '' });
    setShowAddModal(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setFormData({ name: product.name, price: product.price, image: product.image, description: product.description });
    setShowEditModal(true);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (showAddModal) {
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        price: parseFloat(formData.price),
        image: formData.image || 'https://via.placeholder.com/300x200?text=Product',
        description: formData.description,
      };
      setProducts([...products, newProduct]);
    } else if (showEditModal && currentProduct) {
      setProducts(
        products.map((product) =>
          product.id === currentProduct.id
            ? { ...product, name: formData.name, price: parseFloat(formData.price), image: formData.image, description: formData.description }
            : product
        )
      );
    }
    setShowAddModal(false);
    setShowEditModal(false);
    setFormData({ name: '', price: '', image: '', description: '' });
    setCurrentProduct(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin-page container">
      <h2>Admin Dashboard</h2>

      {/* Products Section */}
      <h3 className="mt-4">Manage Products</h3>
      <button className="btn btn-primary mb-3" onClick={handleAddProduct}>
        Add Product
      </button>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <img src={product.image} alt={product.name} className="admin-product-image" />
                </td>
                <td className="admin-product-description">{product.description}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders Section */}
      <h3 className="mt-4">Order History</h3>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} (Qty: {item.quantity}) - ${item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitProduct}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter product description"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Save Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && currentProduct && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitProduct}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter product description"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Update Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;