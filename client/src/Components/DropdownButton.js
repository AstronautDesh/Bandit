import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        More
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/"><li className='dropdown-item'>Home</li></Link>
          <Link to="/newbox"><li className='dropdown-item'>Ticketin'</li></Link>
          <li className='dropdown-item'>Ticket Here</li>
          <li className='dropdown-item'>Ticket Here</li>
          <li className='dropdown-item'>Ticket Here</li>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;