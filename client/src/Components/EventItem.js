//Components/EventsItem.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function EventItem({ id, className, imageUrl, eventName, gridColumn, gridRow, backgroundColor }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const imgRef = useRef();
  const navigate = useNavigate();

  const observerCallback = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIntersecting(true);
    }
  }, []);

  const handleBuyTickets = useCallback((e) => {
    e.preventDefault();
    navigate('/payment_portal', { state: { eventName } });
  }, [navigate, eventName]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '50px',
    });

    const currentImgRef = imgRef.current;

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [observerCallback]);

  const containerStyle = {
    gridColumn,
    gridRow,
    backgroundColor,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

  return (
    <div id={id} className={className} style={containerStyle} ref={imgRef}>
      {isIntersecting && (
        <img src={imageUrl} alt={eventName} className="event-image" style={imageStyle} />
      )}
      <div className="overlay">
        <h3>{eventName}</h3>
        <button onClick={handleBuyTickets}>Buy Tickets</button>
      </div>
    </div>
  );
}

export default EventItem;