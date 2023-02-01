import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductsList = ({ rows, gap }) => {
  const products = useSelector(state => state.products);
  const navigate = useNavigate();

  return (
    <div className="products-list mb-5">
      <div className={`row row-cols-1 row-cols-md-${rows} g-${gap}`}>
        {products.map(product => (
          <div key={product.id} className="col">
            <div
              role="button"
              className="card h-100"
              style={{ maxHeight: '30rem' }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="card-header d-flex align-items-center bg-transparent h-50 w-100">
                <img
                  src={product.images[0].url}
                  className="mh-100 mw-100 d-block mx-auto p-4"
                  alt="Product image"
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text">{product.title}</p>
                <h5 className="card-subtitle">Price</h5>
                <p className="card-text">{`$${product.price}`}</p>
                <button className="btn btn-primary btn-sm w-50 ms-auto">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
