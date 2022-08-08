import './index.css';
import React from 'react';

export const Tab = ({ id = '', className = '', text = '', onClick = '' }) => {
  return (
    <div className="container-tab">
      <li onClick={onClick} id={id} className="tab-nav-item">
        <a className={'tab-nav-link ' + className}>{text}</a>
      </li>
    </div>
  );
};
