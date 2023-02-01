import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductsList = () => {
  const products = useSelector(state => state.products);
  const navigate = useNavigate();

  return (
    <div className="products-list mb-5">
      <div className={`row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4`}>
        {products.map(product => (
          <div key={product.id} className="col">
            <div
              role="button"
              className="card h-100"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="card-header d-flex bg-transparent" style={{ height: '45%' }}>
                <img
                  src={product.images[0].url}
                  className="d-block m-auto p-3"
                  alt="Product image"
                  style={{ maxHeight: 150, maxWidth: 200 }}
                />
              </div>
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ height: '55%' }}
              >
                <div className="mb-2" style={{ height: '70%' }}>
                  <h5 className="card-title fs-6 mb-1 text-muted">{product.brand}</h5>
                  <p className="card-text fs-6 mb-2 lh-1">{product.title}</p>
                </div>
                <div className="mb-2" style={{ height: '30%' }}>
                  <h5 className="card-subtitle fs-6 text-muted">Price</h5>
                  <p className="card-text fs-6">{`$${product.price}`}</p>
                </div>
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
