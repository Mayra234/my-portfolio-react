import './index.css';
import React from 'react';

export const Footer = ({ children = '' }) => {
  return (
    <footer className="footer">
      <div className="content-footer">{children}</div>
    </footer>
  );
};
