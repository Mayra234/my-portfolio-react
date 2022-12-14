import './index.css';
import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

export const NavLink = ({
  id = '',
  children = '',
  route = '',
  onClick = '',
}) => {
  return (
    <Anchor onClick={onClick} className="nav">
      <Link id={id} className="link-nav" href={route} title={children} />
    </Anchor>
  );
};
