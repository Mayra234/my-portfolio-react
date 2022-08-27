import './index.css';
import React from 'react';

export const Tab = ({
  id = '',
  className = '',
  text = '',
  onClick = '',
  index = '',
  currentIndex = '',
}) => {
  return (
    <div className="container-tab">
      <li onClick={onClick} id={id} className={`tab-nav-item `}>
        <a
          className={`tab-nav-link ${className} ${
            currentIndex === index ? 'active' : ''
          }`}
        >
          {text}
        </a>
      </li>
    </div>
  );
};
