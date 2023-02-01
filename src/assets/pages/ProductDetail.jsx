import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterProductsByCategoryThunk } from '../../store/slices/products.slice';
import ImgCarousel from '../components/ImgCarousel';
import ProductShowcase from '../components/ProductShowcase';
import ProductsList from '../components/ProductsList';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`).then(res => {
      const data = res.data;
      setProduct(data);
      dispatch(filterProductsByCategoryThunk(data.category.id, data.id));
    });
  }, [id]);

  return (
    <div className="product-details container">
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5">
        {/* IMAGE CAROUSEL */}
        <div className="col">
          <ImgCarousel product={product} />
        </div>
        {/* PRODUCT DETAILS */}
        <div className="col">
          <ProductShowcase product={product} />
        </div>
      </div>
      <div className="row px-5">
        {/* RELATED PRODUCTS */}
        <h2 className="fs-5 my-4">Discover related products</h2>
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductDetail;
