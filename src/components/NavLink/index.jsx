import './index.css';
import React from 'react';

export const NavLink = ({
  id = '',
  children = '',
  route = '',
  onClick = '',
  className = '',
}) => {
  return (
    <div onClick={onClick} className="nav">
      <a id={id} className={'link-nav ' + className} href={route}>
        {children}
      </a>
    </div>
  );
};
