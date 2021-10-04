import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import { useSelector } from 'react-redux';

import './style.css';

export default function App() {
  const showCart = useSelector(({ cart }) => cart.showCart);
  return (
    <div>
      <Navbar />
      <div className="m-3 d-flex">
        <div className="col">
          <Products />
        </div>
        {showCart && (
          <div className="col-4">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}
