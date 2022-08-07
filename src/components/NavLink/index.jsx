import './index.css';
import React from 'react';

export const NavLink = ({
  id = '',
  children = '',
  route = '',
  style = '',
  className = '',
}) => {
  return (
    <li className="nav">
      <a href={route} className={'link-nav ' + className} id={id}>
        {children}
      </a>
    </li>
  );
};
