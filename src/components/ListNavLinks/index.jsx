import { NavLink } from '../NavLink';
import PropTypes from 'prop-types';
import './index.css';
import React from 'react';

export const ListNavLinks = ({ links = [], className = '' }) => {
  return (
    <div className={className}>
      {links.map((link, i) => (
        <NavLink key={i} {...link} />
      ))}
    </div>
  );
};

ListNavLinks.propTypes = {
  links: PropTypes.array,
};
