// Components/EventItem.js

import React from 'react';

function EventItem({ id, className, imageUrl, eventName, gridColumn, gridRow, backgroundColor }) {
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
    <div id={id} className={className} style={containerStyle}>
      <img src={imageUrl} alt={eventName} className="event-image" style={imageStyle} />
      <div className="overlay">
        <h3>{eventName}</h3>
        <button>Buy Tickets</button>
      </div>
    </div>
  );
}

export default EventItem;  // Make sure this line is present