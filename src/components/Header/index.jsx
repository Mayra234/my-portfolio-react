import './index.css';
import React, { useEffect, useState } from 'react';

export const Header = ({ children = '', className = '' }) => {
  const [addStyleScroll, setAddStyleScroll] = useState(false);

  useEffect(() => {
    const styleScrollHeader = () => {
      setAddStyleScroll(window.scrollY > 0 && !addStyleScroll);
    };

    window.addEventListener('scroll', styleScrollHeader);
  }, []);

  return (
    <div className={className}>
      <div className={`header ${addStyleScroll ? 'scroll' : ''}`}>
        {children}
      </div>
    </div>
  );
};
