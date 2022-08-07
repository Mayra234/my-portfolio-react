import { NavLink } from '../NavLink';
import PropTypes from 'prop-types';
import './index.css';
import React from 'react';

export const ListNavLinks = (props) => {
  return props.links.map((link, i) => <NavLink key={i} {...link} />);
};

ListNavLinks.propTypes = {
  links: PropTypes.array,
};
