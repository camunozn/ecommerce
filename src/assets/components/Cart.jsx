import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowCart } from '../../store/slices/showCart.slice';
import ProductCartCard from './ProductCartCard';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  console.log(cart);

  return (
    <div className="cart">
      <div className="offcanvas-backdrop fade show"></div>
      <div
        className="offcanvas offcanvas-end show"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => dispatch(setShowCart(false))}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="cart-items">
            {cart?.map(item => (
              <ProductCartCard
                key={item.id}
                itemId={item.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
