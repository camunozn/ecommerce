import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowCart } from '../../store/slices/showCart.slice';
import ProductCartCard from './ProductCartCard';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const calcCartTotal = cart => {
    let sum = 0;
    cart.map(item => {
      sum = sum + item.quantity * item.product.price;
    });
    return sum.toFixed(2);
  };

  const cartTotal = calcCartTotal(cart);

  return (
    <div className="cart">
      <div className="offcanvas-backdrop fade show"></div>
      <div className="offcanvas offcanvas-end show">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Shopping Cart</h5>
          <button
            type="button"
            className="btn-close"
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
        <div className="checkout-box border-top py-4 px-3 my-3">
          <div className="d-flex justify-content-between px-1 mb-3">
            <h5 className="text-muted fs-6">Total:</h5>
            <b>{`$ ${cartTotal}`}</b>
          </div>
          <button type="button" className="btn btn-primary w-100">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
