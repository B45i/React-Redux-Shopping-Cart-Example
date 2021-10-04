import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../actions/cart';

const Navbar = () => {
  const dispatch = useDispatch();

  const total = useSelector(({ cart }) => cart.total);

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Shopping Site
        </a>
        <button onClick={handleToggleCart} className="btn btn-success">
          <i className="fa fa-shopping-cart"></i>
          {!!total && <span className="ms-1">({total} Rs)</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
