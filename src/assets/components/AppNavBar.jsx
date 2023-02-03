import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setShowCart } from '../../store/slices/showCart.slice';

const AppNavBar = () => {
  const token = localStorage.getItem('token');
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="nav-bar mb-5">
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient bg-opacity-10">
        <div className="container-fluid px-3">
          <a className="navbar-brand py-2 mx-4" href="/">
            <i className="fa-solid fa-rocket"></i>
            <span className="text-uppercase mx-2">Rocket Store</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                  role="button"
                  onClick={() => {
                    setShowNavbar(false);
                    navigate('/');
                  }}
                >
                  Home
                </a>
              </li>
            </ul>
            <ul className={`navbar-nav d-flex ${token ? '' : 'd-none'}`}>
              <li className="nav-item me-4">
                <a
                  className="nav-link"
                  role="button"
                  onClick={() => {
                    setShowNavbar(false);
                    dispatch(setShowCart(true));
                  }}
                >
                  {showNavbar ? 'My cart' : <i className="fa-solid fa-cart-shopping"></i>}
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className={`nav-link ${pathname === '/purchases' ? 'active' : ''}`}
                  role="button"
                  onClick={() => {
                    setShowNavbar(false);
                    navigate('/purchases');
                  }}
                >
                  {showNavbar ? 'My purchases' : <i className="fa-solid fa-box-archive"></i>}
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className={`nav-link ${pathname === '/user' ? 'active' : ''}`}
                  role="button"
                  onClick={() => {
                    setShowNavbar(false);
                    navigate('/user');
                  }}
                >
                  {showNavbar ? 'My account' : <i className="fa-solid fa-user"></i>}
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${pathname === '/login' ? 'active' : ''}`}
                  role="button"
                  onClick={() => {
                    setShowNavbar(false);
                    if (token) localStorage.setItem('token', '');
                    navigate('/login');
                  }}
                >
                  {token ? 'Log out' : 'Log in'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
