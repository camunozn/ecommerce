import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCartThunk, updateProductQtyThunk } from '../../store/slices/cart.slice';

const ProductCartCard = ({ itemId, product, quantity }) => {
  const [productQty, setProductQyt] = useState(quantity);

  const dispatch = useDispatch();

  const updateQty = qty => {
    setProductQyt(qty);
    dispatch(updateProductQtyThunk(itemId, { quantity: qty }));
  };

  return (
    <div className="product-cart">
      <div className="row rounded-2 border p-3 m-2 mb-4">
        <div className="col-3 px-0">
          <img
            src={product.images[0].url}
            alt="Product image"
            className=""
            style={{ maxHeight: 60, maxWidth: 60 }}
          />
        </div>
        <div className="col-9 px-0 pe-3">
          <div className="d-flex flex-column justify-content-between">
            <div className="mb-1">
              <h3 className="fs-6">{product.title}</h3>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 mb-3">
              <div className="col">
                <h6 className="text-muted m-0">
                  <small>Price</small>
                </h6>
                <p className="m-0">{`$ ${product.price}`}</p>
              </div>
              <div className="col">
                <h6 className="text-muted m-0">
                  <small>Quantity</small>
                </h6>
                <div className="input-group input-group-sm border">
                  <button
                    type="button"
                    className="input-group-text w-25 rounded-0 mx-auto d-inline-block border-0"
                    onClick={() => updateQty(productQty - 1)}
                    disabled={productQty <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={productQty}
                    className="form-control text-center border-top-0 border-bottom-0"
                    onChange={e => {
                      updateQty(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="input-group-text w-25 rounded-0 mx-auto d-inline-block border-0"
                    onClick={() => updateQty(productQty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col">
                <h6 className="text-muted m-0">
                  <small>Total</small>
                </h6>
                <p className="m-0">{`$ ${(product.price * productQty).toFixed(2)}`}</p>
              </div>
              <div className="col text-end my-auto">
                <button
                  type="button"
                  className="btn btn-outline-danger border-0"
                  onClick={() => dispatch(deleteFromCartThunk(itemId))}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
