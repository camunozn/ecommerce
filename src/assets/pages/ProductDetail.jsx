import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then(res => setProduct(res.data));
  }, []);

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductDetail;
