import React, { useState } from 'react';
import './Dropdown.css'; // Import corresponding CSS for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Resume PDFs
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {/* Dropdown menu items */}
          <div className="dropdown-item">Developer Resume</div>
          <div className="dropdown-item">Analyst Resume</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
