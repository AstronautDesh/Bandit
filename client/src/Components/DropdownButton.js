import React, { useState } from 'react';
import '../css/dropdown.css';

const DropdownMenuList = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (path) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <li className='dropdown-item' onClick={() => handleClick("/")}>Home</li>
          <li className='dropdown-item' onClick={() => handleClick("/ticketPage")}>Ticketin'</li>
          <li className='dropdown-item' onClick={() => handleClick("/payment_portal")}>Payment Portal</li>
          <li className='dropdown-item' onClick={() => handleClick("/blogPage")}>Blog Post</li>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuList;