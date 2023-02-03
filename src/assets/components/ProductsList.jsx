import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCartThunk } from '../../store/slices/cart.slice';
import { setShowCart } from '../../store/slices/showCart.slice';

const ProductsList = () => {
  const products = useSelector(state => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="products-list mb-5">
      <div className={`row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4`}>
        {products?.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <div
                role="button"
                style={{ height: '45%' }}
                className="card-header d-flex bg-transparent"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.images[0].url}
                  className="d-block m-auto py-3"
                  alt="Product image"
                  style={{ maxHeight: 150, maxWidth: 180 }}
                />
              </div>
              <div
                style={{ height: '55%' }}
                className="card-body d-flex flex-column justify-content-between"
              >
                <div
                  role="button"
                  className="mb-1"
                  style={{ height: '70%' }}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <h5 className="card-title fs-6 mb-1 text-muted">{product.brand}</h5>
                  <p className="card-text fs-6 mb-2 lh-1">{product.title}</p>
                </div>
                <div
                  role="button"
                  className="mb-2"
                  style={{ height: '30%' }}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <h5 className="card-subtitle fs-6 text-muted">Price</h5>
                  <p className="card-text fs-6">{`$${product.price}`}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm w-50 ms-auto"
                  onClick={() => {
                    dispatch(addToCartThunk({ productId: product.id, quantity: 1 }));
                    setTimeout(() => {
                      dispatch(setShowCart(true));
                    }, 2500);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
