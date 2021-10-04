import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="m-1" style={{ width: '250px' }}>
      <div className="card m-1">
        <img src={product.image} className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-text">{product.name}</p>
          <h5>Rs. {product.price}</h5>
          <button
            onClick={() => handleAddProduct(product)}
            className="btn btn-primary w-100"
          >
            Add to card
            <i className="fa fa-cart-plus ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
