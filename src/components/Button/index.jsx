import './index.css';
import { useEffect, useState } from 'react';
import React from 'react';

export const Button = ({
  id = '',
  children = '',
  className = '',
  palette = '',
  type = 'button',
  ...props
}) => {
  const [style, setStyle] = useState(props.style);

  const changePalette = () => {
    if (palette === 'primary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: '#e91e63' }));
    } else if (palette === 'secondary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: 'transparent' }));
    }
  };

  useEffect(() => {
    changePalette();
  }, [palette]);

  return (
    <button
      id={id}
      className={'button ' + className}
      palette={palette}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};
