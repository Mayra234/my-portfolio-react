import './index.css';
import React from 'react';

export const Navbar = ({ children = '', className = '' }) => {
  return <div className={'navbar ' + className}>{children}</div>;
};
