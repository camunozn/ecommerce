import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../../store/slices/purchases.slice';

const Purchases = () => {
  const purchases = useSelector(state => state.purchases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div className="purchases">
      <div className="container-lg">
        <h2 className="fs-4 mb-5">My purchases</h2>
        {purchases?.map(purchase => (
          <div key={purchase.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-4 col-md-2 text-center d-flex flex-column justify-content-center">
                <img
                  src={purchase.product.images[2].url}
                  className="img-fluid img-thumbnail border-0 mx-auto"
                  style={{ maxHeight: 80, maxWidth: 100 }}
                  alt="..."
                />
              </div>
              <div className="col-8 col-md-10">
                <div className="card-body">
                  <h6 className="card-title">{purchase.product.title}</h6>
                  <div className="row row-cols-1 row-cols-md-3">
                    <small className="card-text col">
                      <span className="text-muted">Price: </span>
                      {`$ ${purchase.product.price}`}
                    </small>
                    <small className="card-text col">
                      <span className="text-muted">Quantity: </span>
                      {purchase.quantity}
                    </small>
                    <small className="card-text col">
                      <span className="text-muted">Purchased on: </span>
                      {purchase.createdAt.slice(0, 10)}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
