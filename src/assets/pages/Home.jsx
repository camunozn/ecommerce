import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../../store/slices/products.slice';
import { getCategoriesThunk } from '../../store/slices/categories.slice';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ProductsList from '../components/ProductsList';
import { getCartThunk } from '../../store/slices/cart.slice';

const Home = () => {
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
    if (token) dispatch(getCartThunk());
  }, []);

  return (
    <div className="home container-fluid">
      <div className="row ">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <SideBar />
        </div>
        <div className="col-12 col-sm-6 col-md-8 col-lg-9">
          <SearchBar />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
