import React from 'react';
import Product from './Product';
import { products } from '../products';

const Products = () => {
  return (
    <div className="d-flex  flex-wrap">
      {(products || []).map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
};

export default Products;
