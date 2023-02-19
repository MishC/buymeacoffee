import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ name, links }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="dropdown" onBlur={closeDropdown}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {name}
        {showDropdown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            Width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            stroke="#909090"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            Width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            stroke="#909090"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        )}
      </button>
      {links ? (
        <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
          {links.map((link, index) => (
            <li key={index} style={{ maxWidth: "max-content" }}>
              {link}
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Dropdown;
