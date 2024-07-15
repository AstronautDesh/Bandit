import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../css/carousel.css';

function Carousel({ images, autoPlay }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const slideRight = useCallback(() => {
    setCurrent(current => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(slideRight, 2500);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, slideRight]);

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel_wrapper">
      {images.map((image, index) => (
        <div
          key={index}
          className={
            index === current
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <img className="card_image" src={image.src} alt={image.title} />
          <div className="card_overlay">
            <h2 className="card_title">{image.title}</h2>
          </div>
        </div>
      ))}
      <div className="carousel_arrow_left" onClick={slideLeft}>
        &lsaquo;
      </div>
      <div className="carousel_arrow_right" onClick={slideRight}>
        &rsaquo;
      </div>
      <div className="carousel_pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={
              index === current
                ? "pagination_dot pagination_dot-active"
                : "pagination_dot"
            }
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
