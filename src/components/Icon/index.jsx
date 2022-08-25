import './index.css';
import React from 'react';

export const Icon = ({ children = '', className = '' }) => {
  return <div className={'icon ' + className}>{children}</div>;
};
