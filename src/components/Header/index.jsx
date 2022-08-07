import './index.css';
import React from 'react';

export const Header = ({
  children = '',
  className = '',
  menuResponsive = '',
  style = '',
}) => {
  return (
    <div className={'header ' + className}>
      <div>{children}</div>
      <div>{menuResponsive}</div>
    </div>
  );
};
