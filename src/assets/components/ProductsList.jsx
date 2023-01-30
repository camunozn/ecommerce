import React from 'react';
import { useSelector } from 'react-redux';

const ProductsList = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="products-list">
      <h2>Products List</h2>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
};

export default ProductsList;
