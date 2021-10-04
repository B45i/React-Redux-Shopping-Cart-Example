import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, total } = useSelector(({ cart }) => ({
    cartItems: cart.cartItems,
    total: cart.total,
  }));

  return (
    <div>
      <h3>Cart</h3>

      {!cartItems.length && <p>Your Cart is empty!</p>}

      {!!cartItems.length && (
        <>
          <ul className="list-group">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))}
          </ul>
          <div className="my-4 font-weight-bold">Total: {total} Rs.</div>
          <button className="btn btn-primary">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
