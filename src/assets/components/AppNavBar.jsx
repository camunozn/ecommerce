import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AppNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="nav-bar mb-5">
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient bg-opacity-10">
        <div className="container-fluid px-3">
          <a className="navbar-brand py-2 me-4" href="/">
            My Store
          </a>
          <button
            className="navbar-toggler"
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
                    navigate('/');
                  }}
                >
                  Home
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${pathname === '/login' ? 'active' : ''}`}
                  role="button"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${pathname === '/purchases' ? 'active' : ''}`}
                  role="button"
                  onClick={() => {
                    navigate('/purchases');
                  }}
                >
                  Purchases
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button">
                  Shopping Cart
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
