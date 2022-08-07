import './index.css';
import React from 'react';

export const Tab = ({ id = '', className = '', children = '' }) => {
  return (
    <div className="container-tab">
      <li id={id} className="tab-nav-item">
        <a className={'tab-nav-link ' + className}>{children}</a>
      </li>
    </div>
  );
};
