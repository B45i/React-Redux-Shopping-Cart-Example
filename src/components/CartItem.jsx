import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateProductCount } from '../actions/cart';

const CartItem = ({ item }) => {
  const { product } = item;

  const dispatch = useDispatch();

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const countHandler = (e) => {
    const count = e.target.value;
    if (count < 1) {
      return;
    }
    dispatch(updateProductCount(product.id, count));
  };

  return (
    <li className="list-group-item">
      <div className="d-flex gap-2 align-items-center">
        <div className="flex-grow-1">{product.name}</div>

        <div>{product.price}Rs.</div>

        <div>
          <input
            type="number"
            value={item.count}
            onChange={(e) => countHandler(e, item)}
            style={{ width: '50px' }}
          />
        </div>

        <div>{item.total}Rs.</div>

        <div>
          <button
            onClick={() => handleRemoveCart(item.product)}
            className="btn btn-danger"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
