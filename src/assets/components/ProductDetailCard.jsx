import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartThunk } from '../../store/slices/cart.slice';
import { setShowCart } from '../../store/slices/showCart.slice';

const ProductDetailCard = ({ product }) => {
  const token = localStorage.getItem('token');
  const [productQty, setProductQyt] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className="product-detail">
      {/* PRODUCT DETAILS */}
      <div className="d-flex flex-column justify-content-between p-5">
        <div className="mb-3">
          <h4 className="fs-6 fw-normal text-muted">{product?.brand}</h4>
          <h3 className="fs-5 mb-3">{product?.title}</h3>
          <p className="fs-6">{product?.description}</p>
        </div>
        <div className="d-flex mb-4">
          <div className="col">
            <h6 className="text-muted">Price</h6>
            <p>{`$ ${product?.price}`}</p>
          </div>
          <div className="col">
            <h6 className="text-muted">Quantity</h6>
            <div className="input-group input-group-sm w-50 border">
              <button
                type="button"
                className="input-group-text w-25 rounded-0 mx-auto d-inline-block border-0"
                onClick={() => setProductQyt(productQty - 1)}
                disabled={productQty <= 1}
              >
                -
              </button>
              <input
                type="number"
                value={productQty}
                className="form-control text-center border-top-0 border-bottom-0"
                onChange={e => setProductQyt(e.target.value)}
              />
              <button
                type="button"
                className="input-group-text w-25 rounded-0 mx-auto d-inline-block border-0"
                onClick={() => setProductQyt(productQty + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={() => {
            dispatch(addToCartThunk({ productId: product?.id, quantity: productQty }));
            if (token) {
              setTimeout(() => {
                dispatch(setShowCart(true));
              }, 2500);
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
