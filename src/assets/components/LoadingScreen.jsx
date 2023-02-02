import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="overlay">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
};

export default LoadingScreen;
