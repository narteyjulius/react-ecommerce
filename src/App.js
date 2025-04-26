import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Orders from './components/Orders';

import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart';
import PaymentConfirmation from './components/PaymentConfirmation';
import Checkout from './components/Checkout';
import Admin from './components/Admin';


function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </CartProvider>
  );
}

export default App;
