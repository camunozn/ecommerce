import React, { useState } from 'react';
import { useEffect } from 'react';

const ImgCarousel = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setImgIndex(selectedIndex);
  };

  useEffect(() => {
    setImgIndex(0);
  }, [product]);

  return (
    <div className="img-carousel d-flex flex-column justify-content-around h-100">
      {/* IMAGE CAROUSEL */}
      <div className="img-slide h-100">
        <div className="carousel carousel-dark h-100">
          <div className="carousel-inner h-100">
            {product.images?.map((image, i) => (
              <div
                key={image.id}
                className={`carousel-item h-100 ${i === imgIndex ? 'active d-flex h-100' : ''}`}
              >
                <img
                  src={image.url}
                  className="d-block p-5 m-auto"
                  alt=""
                  style={{ maxHeight: 400, maxWidth: '80%' }}
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
      {/* CAROUSEL INDICATORS */}
      <div className="img-indicators">
        <div className="carousel-indicators m-0 position-relative">
          {product.images?.map((image, i) => (
            <button
              key={image.id}
              type="button"
              style={{ height: '4rem', width: '4rem' }}
              className={`${i === imgIndex ? 'active' : ''} btn btn-outline-light mx-1`}
              onClick={() => handleSelect(i)}
            >
              <img src={image.url} className="mh-100 mw-100" alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgCarousel;
