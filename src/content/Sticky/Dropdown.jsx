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
      </button>
      {/* {links ? (
        <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
          {links.map((link, index) => (
            <li key={index} style={{ maxWidth: "max-content" }}>
              {link}
            </li>
          ))}
        </ul>
      ) : ( */}
      {links ? (
        <div
          className={`dropdown-menu shadow p-3 mb-5 bg-white rounded ${
            showDropdown ? "show" : ""
          }`}
        >
          {links}
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default Dropdown;
