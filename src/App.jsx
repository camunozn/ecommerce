import './App.css';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppNavBar from './assets/components/AppNavBar';
import LoadingScreen from './assets/components/LoadingScreen';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import ProductDetail from './assets/pages/ProductDetail';
import ProtectedRoutes from './assets/pages/ProtectedRoutes';
import User from './assets/pages/User';
import Purchases from './assets/pages/Purchases';

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <div className="App">
        <AppNavBar />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/user" element={<User />} />
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
