import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../../store/slices/products.slice';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ProductsList from '../components/ProductsList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <div className="home">
      <SideBar />
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default Home;
