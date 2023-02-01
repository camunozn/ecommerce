import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterProductsByCategoryThunk } from '../../store/slices/products.slice';
import ProductsList from '../components/ProductsList';

const ProductDetail = () => {
  const { id } = useParams();
  const [imgIndex, setImgIndex] = useState(0);
  const [product, setProduct] = useState({});
  const [productQty, setProductQyt] = useState(1);
  const products = useSelector(state => state.products);

  const filteredProducts = products.filter(product => product.id !== parseInt(id));

  const dispatch = useDispatch();

  const handleSelect = selectedIndex => {
    setImgIndex(selectedIndex);
  };

  useEffect(() => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`).then(res => {
      const data = res.data;
      setProduct(data);
      dispatch(filterProductsByCategoryThunk(data.category.id));
    });
  }, [id]);

  return (
    <div className="product-details px-5">
      <div className="row align-items-center">
        {/* IMAGE CAROUSEL */}
        <div className="col">
          <div className="carousel carousel-dark">
            <div className="carousel-inner">
              {product.images?.map((image, i) => (
                <div key={image.id} className={`carousel-item ${i === imgIndex ? 'active' : ''}`}>
                  <img
                    src={image.url}
                    className="d-block p-5 m-auto"
                    alt=""
                    style={{ maxHeight: 400, maxWidth: 400 }}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              role="button"
              data-bs-slide="prev"
              className="carousel-control-prev"
              onClick={() => setImgIndex(imgIndex - 1)}
              disabled={imgIndex <= 0}
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              type="button"
              role="button"
              data-bs-slide="next"
              className="carousel-control-next"
              onClick={() => setImgIndex(imgIndex + 1)}
              disabled={imgIndex >= product.images?.length - 1}
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="col" style={{ height: '25rem' }}>
          <div className="d-flex flex-column px-5">
            <div className="mb-3">
              <h4 className="fs-6 fw-normal text-muted">{product?.brand}</h4>
              <h3 className="fs-5 mb-3">{product?.title}</h3>
              <p className="fs-6">{product?.description}</p>
            </div>
            <div className="d-flex mb-4">
              <div className="col">
                <h6 className="text-muted">Price</h6>
                <p>{product?.price}</p>
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
            <button type="button" className="btn btn-primary w-100">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* CAROUSEL INDICATORS */}
      <div className="row mb-5">
        <div className="col-6">
          <div className="carousel-indicators m-0 position-relative">
            {product.images?.map((image, i) => (
              <button
                key={image.id}
                type="button"
                style={{ height: '4rem', width: '4rem' }}
                className={`${i === imgIndex ? 'active' : ''} btn btn-outline-light`}
                onClick={() => handleSelect(i)}
              >
                <img src={image.url} className="mh-100 mw-100" alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="row">
        <h2 className="fs-5 my-4">Discover related products</h2>
        <ProductsList rows={4} gap={5} />
      </div>
    </div>
  );
};

export default ProductDetail;
